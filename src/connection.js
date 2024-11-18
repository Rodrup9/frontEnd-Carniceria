import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://ebuifmauncgfjplsrmfb.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidWlmbWF1bmNnZmpwbHNybWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwOTk2ODAsImV4cCI6MjA0MTY3NTY4MH0.dC-zbdRCnlZF-1Ndp6QnSu1IYdphVdrY3NvDg2xitFY')
