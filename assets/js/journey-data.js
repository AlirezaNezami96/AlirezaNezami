/**
 * ═══════════════════════════════════════════════════════════════════
 *  THE PATH — Journey Data Engine (v2)
 *  Client-side state calculator, 5-Resource Manager, PostgREST sync,
 *  & Owner-Only Passcode Authentication Access Control
 * ═══════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  const PROGRAM_START_DATE = '2026-08-18';
  const STORAGE_KEY_OVERRIDES = 'an_journey_overrides_v1';
  const STORAGE_KEY_AUTH = 'an_journey_owner_authenticated_v1';
  const DEFAULT_OWNER_PASSCODE = 'alireza-ai-2026';
  
  const SUPABASE_URL = (typeof window.SUPABASE_URL !== 'undefined') ? window.SUPABASE_URL : 'https://odjcvmuqepwowoptgikn.supabase.co';
  const SUPABASE_ANON_KEY = (typeof window.SUPABASE_ANON_KEY !== 'undefined') ? window.SUPABASE_ANON_KEY : 'sb_publishable_6-uNgp-L2jeyzHxvsxy1uQ_2U-7pZ6A';

  // Major milestone markers in the 6-month journey
  const MILESTONES = {
    '2026-09-11': { id: 'p0', label: 'Project #0', desc: 'CLI Assistant with Memory' },
    '2026-10-09': { id: 'p1', label: 'Project #1', desc: 'RAG Knowledge Assistant' },
    '2026-11-06': { id: 'p2', label: 'Project #2', desc: 'Autonomous Job Agent' },
    '2026-12-04': { id: 'p3', label: 'Project #3', desc: 'Production API with Guardrails' },
    '2026-12-18': { id: 'mcp', label: 'MCP Server', desc: 'Custom Context Server' },
    '2027-01-15': { id: 'p4', label: 'Capstone #4', desc: 'Production Multi-Agent Platform' },
    '2027-02-15': { id: 'grad', label: 'Roadmap Complete', desc: 'Applied AI Engineer' }
  };

  let subscribers = [];

  function isOwnerAuthenticated() {
    return localStorage.getItem(STORAGE_KEY_AUTH) === 'true';
  }

  function setOwnerAuthenticated(status) {
    if (status) {
      localStorage.setItem(STORAGE_KEY_AUTH, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEY_AUTH);
    }
    notifySubscribers();
  }

  function getLocalOverrides() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_OVERRIDES) || '{}');
    } catch {
      return {};
    }
  }

  function setLocalOverride(dateStr, val) {
    const overrides = getLocalOverrides();
    if (val === null) {
      delete overrides[dateStr];
    } else {
      overrides[dateStr] = Boolean(val);
    }
    localStorage.setItem(STORAGE_KEY_OVERRIDES, JSON.stringify(overrides));
    notifySubscribers();
  }

  function getTodayDateStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function computeState(entryDateStr, overrideVal, todayStr) {
    if (overrideVal === true) return 'completed';
    if (overrideVal === false) {
      return entryDateStr === todayStr ? 'current' : (entryDateStr > todayStr ? 'future' : 'future');
    }
    if (entryDateStr < todayStr) return 'completed';
    if (entryDateStr === todayStr) return 'current';
    return 'future';
  }

  const JourneyData = {
    PROGRAM_START_DATE,
    MILESTONES,

    isOwner: function () {
      return isOwnerAuthenticated();
    },

    authenticateOwner: function (passcode) {
      if (passcode && passcode.trim() === DEFAULT_OWNER_PASSCODE) {
        setOwnerAuthenticated(true);
        return { success: true, message: "Authenticated as Roadmap Owner!" };
      }
      return { success: false, message: "Invalid Owner Passcode. Please try again." };
    },

    logoutOwner: function () {
      setOwnerAuthenticated(false);
    },

    getDays: function () {
      const curriculum = window.JOURNEY_CURRICULUM || [];
      const overrides = getLocalOverrides();
      const todayStr = getTodayDateStr();

      return curriculum.map((item, index) => {
        const dateStr = item.date;
        const override = overrides[dateStr] !== undefined ? overrides[dateStr] : item.completed_override;
        const state = computeState(dateStr, override, todayStr);
        const milestone = MILESTONES[dateStr] || null;

        return {
          ...item,
          day_number: index + 1,
          completed_override: override,
          state,
          milestone,
          is_today: dateStr === todayStr
        };
      });
    },

    getDay: function (dateStr) {
      const days = this.getDays();
      return days.find(d => d.date === dateStr) || null;
    },

    getWindow: function (centerDateStr) {
      const days = this.getDays();
      const targetDate = centerDateStr || getTodayDateStr();
      let centerIdx = days.findIndex(d => d.date === targetDate);
      
      if (centerIdx === -1) {
        if (days.length === 0) return [];
        centerIdx = targetDate < days[0].date ? 0 : days.length - 1;
      }

      let startIdx = centerIdx - 1;
      let endIdx = centerIdx + 2;

      if (startIdx < 0) {
        startIdx = 0;
        endIdx = Math.min(days.length, 3);
      } else if (endIdx > days.length) {
        endIdx = days.length;
        startIdx = Math.max(0, days.length - 3);
      }

      return days.slice(startIdx, endIdx);
    },

    getStats: function () {
      const days = this.getDays();
      const total = days.length;
      const completed = days.filter(d => d.state === 'completed').length;
      const todayDay = days.find(d => d.is_today) || days[0];
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      
      return {
        total,
        completed,
        remaining: total - completed,
        percent,
        currentDayNumber: todayDay ? todayDay.day_number : 1,
        currentWeekNumber: todayDay ? todayDay.week_number : 1,
        todayDate: getTodayDateStr(),
        isOwner: isOwnerAuthenticated()
      };
    },

    toggleCompletion: async function (dateStr, isCompleted, optPasscode) {
      // Check Owner Authentication
      if (!isOwnerAuthenticated()) {
        if (optPasscode && optPasscode.trim() === DEFAULT_OWNER_PASSCODE) {
          setOwnerAuthenticated(true);
        } else {
          return {
            success: false,
            needs_auth: true,
            message: "Owner Passcode required to modify completion status."
          };
        }
      }

      setLocalOverride(dateStr, isCompleted);

      // Dual sync with Supabase PostgREST & Local API if available
      if (SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes('YOUR_')) {
        try {
          fetch(`${SUPABASE_URL}/rest/v1/learning_days?date=eq.${dateStr}`, {
            method: 'PATCH',
            headers: {
              'apikey': SUPABASE_ANON_KEY,
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ completed_override: isCompleted })
          }).catch(() => {});
        } catch {}
      }

      // Track Firebase telemetry event
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('journey_node_toggle', {
          date: dateStr,
          completed: isCompleted,
          is_owner: true
        });
      }

      return { success: true, date: dateStr, completed: isCompleted };
    },

    subscribe: function (callback) {
      subscribers.push(callback);
      return () => {
        subscribers = subscribers.filter(cb => cb !== callback);
      };
    }
  };

  function notifySubscribers() {
    subscribers.forEach(cb => {
      try { cb(JourneyData.getStats()); } catch (err) { console.error(err); }
    });
  }

  window.JourneyData = JourneyData;
})();
