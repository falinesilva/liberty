import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bagvahadiehddzgbibhj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZ3ZhaGFkaWVoZGR6Z2JpYmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NDE2MTMsImV4cCI6MjA2MTQxNzYxM30.-mlmD04uoAd7YAChxX2QKFU_z6iznkS7lUTAodJb_0s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
