-- ─────────────────────────────────────────────────────────────────────────────
-- NEON DODGE LEADERBOARD SEED SCRIPT (Supabase PostgreSQL)
-- 
-- Instructions:
-- 1. Open Supabase SQL Editor: https://supabase.com/dashboard/project/odjcvmuqepwowoptgikn/sql
-- 2. Paste and run this SQL script.
-- 3. It populates 1,579 entries with "Alireza Nezami" as #1 (2m 56.0s = 176,000ms).
-- ─────────────────────────────────────────────────────────────────────────────

-- 1. Insert Alireza Nezami as #1 with 2m 56s (176,000 milliseconds)
INSERT INTO public.leaderboard (name, score, created_at)
VALUES ('Alireza Nezami', 176000, NOW() - INTERVAL '1 hour');

-- 2. Insert 1,578 random player entries (name length max 16 chars, strictly <= 20)
INSERT INTO public.leaderboard (name, score, created_at)
SELECT 
  (
    ARRAY[
      'CyberSam', 'CodeNinja', 'PixelAce', 'KotlinDev', 'FlutterPro',
      'ShadowDev', 'NeonRider', 'ByteBoss', 'TurboDev', 'SyntaxDev',
      'AsyncAce', 'NullPoint', 'GlitchHunter', 'VectorViper', 'ZeroBug',
      'BitSlinger', 'BinaryBoss', 'ComposeAce', 'DartRider', 'VaporWave',
      'CyberAce', 'MatrixDev', 'DevOpsDan', 'AgileAce', 'GitPusher',
      'RefactorAce', 'LogicLord', 'HyperSpeed', 'ApexCoder', 'SonicSurfer'
    ]
  )[FLOOR(RANDOM() * 30 + 1)] || '_' || FLOOR(RANDOM() * 899 + 100)::TEXT AS name,
  FLOOR(RANDOM() * (172000 - 12000 + 1) + 12000)::INTEGER AS score,
  NOW() - (RANDOM() * INTERVAL '30 days') AS created_at
FROM generate_series(1, 1578);
