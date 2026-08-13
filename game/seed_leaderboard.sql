-- ─────────────────────────────────────────────────────────────────────────────
-- NEON DODGE LEADERBOARD SEED SCRIPT (Supabase PostgreSQL)
-- 
-- Instructions:
-- 1. Open Supabase SQL Editor: https://supabase.com/dashboard/project/odjcvmuqepwowoptgikn/sql
-- 2. Paste and run this SQL script.
-- 3. It creates the 1,579 entries with "Alireza Nezami" as #1 (2m 56.0s = 176,000ms).
-- ─────────────────────────────────────────────────────────────────────────────

-- Clear existing sample records if needed (optional)
-- TRUNCATE TABLE public.leaderboard;

-- 1. Insert Alireza Nezami as #1 with 2m 56s (176,000 milliseconds)
INSERT INTO public.leaderboard (name, score, created_at)
VALUES ('Alireza Nezami', 176000, NOW() - INTERVAL '1 hour');

-- 2. Insert 1,578 random player entries with scores strictly below 176,000ms
INSERT INTO public.leaderboard (name, score, created_at)
SELECT 
  (
    ARRAY[
      'CyberSamurai', 'CodeNinja', 'PixelPioneer', 'KotlinWizard', 'FlutterDev',
      'ShadowCoder', 'NeonDodger', 'QuantumHacker', 'ByteRider', 'TurboDev',
      'SyntaxMaster', 'AndroidArchitect', 'AsyncHero', 'NullPointer', 'StackOverflow',
      'GlitchHunter', 'VectorViper', 'ZeroBug', 'BitSlinger', 'BinaryBoss',
      'ComposeKing', 'DartRider', 'VaporWave', 'CyberSurfer', 'MatrixRunner',
      'DevOpsDan', 'AgileAce', 'GitPusher', 'RefactorRay', 'LogicLord',
      'HyperSpeed', 'ApexCoder', 'SonicSurfer', 'FlameDev', 'TitanRacer'
    ]
  )[FLOOR(RANDOM() * 35 + 1)] || '_' || FLOOR(RANDOM() * 9000 + 1000)::TEXT AS name,
  FLOOR(RANDOM() * (172000 - 12000 + 1) + 12000)::INTEGER AS score,
  NOW() - (RANDOM() * INTERVAL '30 days') AS created_at
FROM generate_series(1, 1578);
