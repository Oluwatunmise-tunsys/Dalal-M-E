import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Database features will be limited.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Lead {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  source: 'chatbot' | 'contact-form' | 'quote-request'
  created_at?: string
}

export interface QuoteRequest {
  id?: string
  email: string
  projectType: string
  projectSize: string
  requirements: string
  location: string
  costEstimate?: string
  duration?: string
  summary?: string
  created_at?: string
}

export interface ChatMessage {
  id?: string
  userEmail?: string
  userMessage: string
  assistantReply: string
  created_at?: string
}

export const saveLead = async (lead: Lead) => {
  try {
    const { data, error } = await supabase.from('leads').insert([lead]).select()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error saving lead:', error)
    throw error
  }
}

export const saveQuoteRequest = async (quote: QuoteRequest) => {
  try {
    const { data, error } = await supabase.from('quote_requests').insert([quote]).select()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error saving quote request:', error)
    throw error
  }
}

export const saveChatMessage = async (message: ChatMessage) => {
  try {
    const { data, error } = await supabase.from('chatbot_messages').insert([message]).select()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error saving chat message:', error)
    throw error
  }
}

export const getLeads = async () => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching leads:', error)
    throw error
  }
}

export const getQuoteRequests = async () => {
  try {
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching quote requests:', error)
    throw error
  }
}
