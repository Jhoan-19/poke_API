import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://diivkrttdmqhboquzddq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaXZrcnR0ZG1xaGJvcXV6ZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODAxMjAsImV4cCI6MjA2MzI1NjEyMH0.pb9rtTw5lCQU6Dac-xVEzgs5fiHKi4JeKXU1maOPckg';
export const supabase = createClient(supabaseUrl, supabaseKey);