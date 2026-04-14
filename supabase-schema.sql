-- ============================================================
-- Supabase Schema for VocabBuilder (lang-learn)
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Profiles table
-- Stores user profile data and daily word goal.
-- Linked 1:1 with auth.users via id.
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  display_name text,
  avatar_url text,
  daily_word_goal integer not null default 10 check (daily_word_goal >= 1 and daily_word_goal <= 100),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 2. Learning Progress table
-- Tracks the number of words a user has learned per day.
-- Unique constraint on (user_id, date) ensures one row per user per day.
create table if not exists public.learning_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  words_learned_count integer not null default 0 check (words_learned_count >= 0),
  date date not null default current_date,
  created_at timestamptz not null default now(),
  unique(user_id, date)
);

alter table public.learning_progress enable row level security;

create policy "Users can view their own progress"
  on public.learning_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert their own progress"
  on public.learning_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own progress"
  on public.learning_progress for update
  using (auth.uid() = user_id);

-- 3. Streaks table
-- Maintains current and longest streak per user.
create table if not exists public.streaks (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null unique,
  current_streak integer not null default 0 check (current_streak >= 0),
  longest_streak integer not null default 0 check (longest_streak >= 0),
  last_activity_date date,
  created_at timestamptz not null default now()
);

alter table public.streaks enable row level security;

create policy "Users can view their own streaks"
  on public.streaks for select
  using (auth.uid() = user_id);

create policy "Users can insert their own streaks"
  on public.streaks for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own streaks"
  on public.streaks for update
  using (auth.uid() = user_id);

-- 4. Trigger: Auto-create profile + streak row on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  );

  insert into public.streaks (user_id, current_streak, longest_streak)
  values (new.id, 0, 0);

  return new;
end;
$$ language plpgsql security definer;

-- Drop trigger if it exists (safe for re-runs)
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
