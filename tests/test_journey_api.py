"""
Test suite for The Path FastAPI endpoints and data computations.
"""

from fastapi.testclient import TestClient
import pytest
from datetime import date
from api.main import app, compute_node_state

client = TestClient(app)

def test_root_endpoint():
    res = client.get("/")
    assert res.status_code == 200
    data = res.json()
    assert "endpoints" in data

def test_get_all_days():
    res = client.get("/api/days?today=2026-08-18")
    assert res.status_code == 200
    days = res.json()
    assert len(days) == 182
    
    # Day 1 is 2026-08-18 -> current
    day1 = days[0]
    assert day1["date"] == "2026-08-18"
    assert day1["week_number"] == 1
    assert day1["day_in_week"] == 1
    assert day1["day_type"] == "study"
    assert day1["state"] == "current"
    assert "Set up the toolkit" in day1["title"]

    # Day 2 is 2026-08-19 -> future
    day2 = days[1]
    assert day2["state"] == "future"

def test_days_window_widget():
    res = client.get("/api/days/window?around=2026-08-18")
    assert res.status_code == 200
    window = res.json()
    assert len(window) >= 2
    # First element is today (index 0) or yesterday
    assert window[0]["date"] == "2026-08-18"
    assert window[0]["state"] == "current"

def test_single_day_detail():
    res = client.get("/api/days/2026-08-18")
    assert res.status_code == 200
    data = res.json()
    assert data["date"] == "2026-08-18"
    assert "resources" in data

def test_completion_override_logic():
    # Test date logic
    today = date(2026, 8, 20)
    assert compute_node_state("2026-08-18", None, today) == "completed"
    assert compute_node_state("2026-08-20", None, today) == "current"
    assert compute_node_state("2026-08-22", None, today) == "future"
    
    # Override wins
    assert compute_node_state("2026-08-22", True, today) == "completed"
    assert compute_node_state("2026-08-18", False, today) == "future"

def test_patch_completion():
    # Unauthorized attempt without key should fail with 401
    unauth = client.patch("/api/days/2026-08-18/complete", json={"completed": True})
    assert unauth.status_code == 401

    # Authorized attempt with X-Owner-Key should succeed
    res = client.patch(
        "/api/days/2026-08-18/complete", 
        json={"completed": True},
        headers={"X-Owner-Key": "alireza-ai-2026"}
    )
    assert res.status_code == 200
    assert res.json()["completed_override"] is True
    
    # Verify in single day endpoint
    res2 = client.get("/api/days/2026-08-18")
    assert res2.json()["completed_override"] is True
    assert res2.json()["state"] == "completed"
