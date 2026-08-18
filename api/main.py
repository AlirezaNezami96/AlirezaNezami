"""
FastAPI Backend for 'The Path' — 6-Month AI Engineering Progress Tracker.
Implements:
  - GET   /api/days                  (all 182 rows with computed state)
  - GET   /api/days/{date}           (single row detail)
  - GET   /api/days/window           (yesterday, today, tomorrow for widget)
  - PATCH /api/days/{date}/complete  (manual override)
"""

import os
import json
from datetime import date, datetime
from typing import List, Optional, Literal, Dict, Any
from pathlib import Path

from fastapi import FastAPI, HTTPException, Query, Header, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import httpx

app = FastAPI(
    title="The Path — AI Engineering Tracker API",
    description="Backend service tracking a 6-month Applied AI Engineering curriculum",
    version="1.0.0"
)

# Enable CORS for local development and GitHub Pages hosting
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SUPABASE_URL = os.getenv("SUPABASE_URL", "https://odjcvmuqepwowoptgikn.supabase.co")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "sb_publishable_6-uNgp-L2jeyzHxvsxy1uQ_2U-7pZ6A")

CURRICULUM_PATH = Path(__file__).resolve().parent.parent / "journey" / "curriculum.json"

# In-memory overrides cache (fallback if Supabase table is not yet migrated)
_local_overrides: Dict[str, Optional[bool]] = {}

class ResourceItem(BaseModel):
    label: str
    url: Optional[str] = None

class LearningDay(BaseModel):
    day_number: int
    date: str
    week_number: int
    day_in_week: int
    day_type: Literal["study", "rest"]
    title: str
    description: str
    resources: List[ResourceItem] = Field(default_factory=list)
    deliverable: Optional[str] = None
    completed_override: Optional[bool] = None
    state: Literal["completed", "current", "future"]

class CompleteOverridePayload(BaseModel):
    completed: Optional[bool] = None

def compute_node_state(entry_date_str: str, override: Optional[bool], today_date: Optional[date] = None) -> str:
    """
    Computes node state based on date and optional manual override:
      - If completed_override is True -> 'completed'
      - If completed_override is False -> 'future' (or 'current' if today)
      - If completed_override is None:
          - entry_date < today -> 'completed'
          - entry_date == today -> 'current'
          - entry_date > today -> 'future'
    """
    if today_date is None:
        today_date = date.today()
        
    entry_date = datetime.strptime(entry_date_str, "%Y-%m-%d").date()
    
    if override is True:
        return "completed"
    if override is False:
        if entry_date == today_date:
            return "current"
        return "future" if entry_date > today_date else "future"
        
    if entry_date < today_date:
        return "completed"
    elif entry_date == today_date:
        return "current"
    else:
        return "future"

async def fetch_days_from_supabase() -> Optional[List[Dict[str, Any]]]:
    """Attempts to fetch days from Supabase PostgREST endpoint."""
    if not SUPABASE_URL or not SUPABASE_ANON_KEY:
        return None
    try:
        async with httpx.AsyncClient(timeout=4.0) as client:
            res = await client.get(
                f"{SUPABASE_URL}/rest/v1/learning_days?select=*&order=date.asc",
                headers={
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": f"Bearer {SUPABASE_ANON_KEY}"
                }
            )
            if res.status_code == 200:
                data = res.json()
                if data and len(data) > 0:
                    return data
    except Exception:
        pass
    return None

def load_local_curriculum() -> List[Dict[str, Any]]:
    """Loads embedded 182-day curriculum JSON from disk."""
    if CURRICULUM_PATH.exists():
        with open(CURRICULUM_PATH, "r", encoding="utf-8") as f:
            days = json.load(f)
            # Merge in-memory overrides
            for d in days:
                dt = d["date"]
                if dt in _local_overrides:
                    d["completed_override"] = _local_overrides[dt]
            return days
    return []

async def get_raw_days() -> List[Dict[str, Any]]:
    supabase_data = await fetch_days_from_supabase()
    if supabase_data:
        # Standardize field structure
        formatted = []
        for i, row in enumerate(supabase_data, start=1):
            formatted.append({
                "day_number": i,
                "date": str(row["date"]),
                "week_number": row["week_number"],
                "day_in_week": row["day_in_week"],
                "day_type": row["day_type"],
                "title": row["title"],
                "description": row["description"],
                "resources": row.get("resources") or [],
                "deliverable": row.get("deliverable"),
                "completed_override": row.get("completed_override")
            })
        return formatted
    return load_local_curriculum()


# ═══════════════════════════════════════════════════════════════
#  ROUTES
# ═══════════════════════════════════════════════════════════════

@app.get("/")
def root():
    return {
        "app": "The Path — AI Engineering Progress Tracker API",
        "version": "1.0.0",
        "docs": "/docs",
        "endpoints": [
            "/api/days",
            "/api/days/{date}",
            "/api/days/window?around=today",
            "/api/days/{date}/complete"
        ]
    }

@app.get("/api/days", response_model=List[LearningDay])
async def get_all_days(today: Optional[str] = Query(None, description="Optional YYYY-MM-DD override for server date")):
    """Returns all 182 rows with computed state ('completed', 'current', 'future')."""
    target_today = datetime.strptime(today, "%Y-%m-%d").date() if today else date.today()
    raw_days = await get_raw_days()
    
    result = []
    for d in raw_days:
        st = compute_node_state(d["date"], d.get("completed_override"), target_today)
        result.append(LearningDay(
            day_number=d["day_number"],
            date=d["date"],
            week_number=d["week_number"],
            day_in_week=d["day_in_week"],
            day_type=d["day_type"],
            title=d["title"],
            description=d["description"],
            resources=d.get("resources") or [],
            deliverable=d.get("deliverable"),
            completed_override=d.get("completed_override"),
            state=st
        ))
    return result

@app.get("/api/days/window", response_model=List[LearningDay])
async def get_days_window(around: str = Query("today", description="Center date: 'today' or YYYY-MM-DD")):
    """Returns a 3-node window (yesterday, today, tomorrow) for the landing widget."""
    center_date = date.today() if around == "today" else datetime.strptime(around, "%Y-%m-%d").date()
    raw_days = await get_raw_days()
    
    # Locate today's index or closest day
    center_str = center_date.strftime("%Y-%m-%d")
    center_idx = None
    
    for idx, d in enumerate(raw_days):
        if d["date"] == center_str:
            center_idx = idx
            break
            
    if center_idx is None:
        # If before start date, center on day 0; if after end, center on last day
        if len(raw_days) > 0:
            if center_str < raw_days[0]["date"]:
                center_idx = 0
            else:
                center_idx = len(raw_days) - 1
        else:
            return []

    # Get window [center_idx - 1, center_idx, center_idx + 1] clamped within bounds
    start_idx = max(0, center_idx - 1)
    end_idx = min(len(raw_days), center_idx + 2)
    window_raw = raw_days[start_idx:end_idx]

    result = []
    for d in window_raw:
        st = compute_node_state(d["date"], d.get("completed_override"), center_date)
        result.append(LearningDay(
            day_number=d["day_number"],
            date=d["date"],
            week_number=d["week_number"],
            day_in_week=d["day_in_week"],
            day_type=d["day_type"],
            title=d["title"],
            description=d["description"],
            resources=d.get("resources") or [],
            deliverable=d.get("deliverable"),
            completed_override=d.get("completed_override"),
            state=st
        ))
    return result

@app.get("/api/days/{day_date}", response_model=LearningDay)
async def get_single_day(day_date: str):
    """Returns single day detail by date (YYYY-MM-DD)."""
    raw_days = await get_raw_days()
    for d in raw_days:
        if d["date"] == day_date:
            st = compute_node_state(d["date"], d.get("completed_override"))
            return LearningDay(
                day_number=d["day_number"],
                date=d["date"],
                week_number=d["week_number"],
                day_in_week=d["day_in_week"],
                day_type=d["day_type"],
                title=d["title"],
                description=d["description"],
                resources=d.get("resources") or [],
                deliverable=d.get("deliverable"),
                completed_override=d.get("completed_override"),
                state=st
            )
    raise HTTPException(status_code=404, detail=f"Day with date {day_date} not found.")

OWNER_PASSCODE = os.getenv("OWNER_PASSCODE", "alireza-ai-2026")

@app.patch("/api/days/{day_date}/complete")
async def update_day_completion(
    day_date: str, 
    payload: CompleteOverridePayload,
    x_owner_key: Optional[str] = Header(None, description="Secret Owner Passcode")
):
    """Toggles completed_override for a specific date (Requires Owner Passcode)."""
    if x_owner_key != OWNER_PASSCODE:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized: Valid Owner Passcode required to modify completion status."
        )
        
    override_val = payload.completed
    _local_overrides[day_date] = override_val
    
    # Also attempt Supabase update if configured
    if SUPABASE_URL and SUPABASE_ANON_KEY:
        try:
            async with httpx.AsyncClient(timeout=3.0) as client:
                await client.patch(
                    f"{SUPABASE_URL}/rest/v1/learning_days?date=eq.${day_date}",
                    headers={
                        "apikey": SUPABASE_ANON_KEY,
                        "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
                        "Content-Type": "application/json",
                        "Prefer": "return=minimal"
                    },
                    json={"completed_override": override_val}
                )
        except Exception:
            pass
            
    return {
        "date": day_date,
        "completed_override": override_val,
        "status": "updated",
        "authorized_by": "owner"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
