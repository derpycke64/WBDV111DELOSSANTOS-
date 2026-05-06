 // 2. INITIALIZE CLIENT (Using your Project URL and Anon Key)
const supabaseUrl = 'https://rmftlwwdpyyqvsotehbz.supabase.co'
const supabaseKey = 'sb_publishable_brlQmWGJbQr7490TaCjQPg_IwCcS1Lb' 

export const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
)