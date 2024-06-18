import { createClient } from '@supabase/supabase-js';

const SUPABASE_PROJECT_URL = 'https://declroalsupifwwmibqo.supabase.co';

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlY2xyb2Fsc3VwaWZ3d21pYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MTM5ODUsImV4cCI6MjAzNDE4OTk4NX0.g9jdRosniaNBE6wYYJhwcNysnOgwTgHly4JMoS84364';

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
