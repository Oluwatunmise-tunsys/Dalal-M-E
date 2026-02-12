import { NextResponse } from 'next/server'
import { saveLead } from '@/lib/supabase'

interface ContactRequest {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as ContactRequest

    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // Save to Supabase (non-blocking)
    saveLead({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: `[Subject: ${data.subject}] ${data.message}`,
      source: 'contact-form',
    }).catch(err => console.error('Failed to save lead to Supabase:', err))

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We will get back to you soon.',
    })
  } catch (error) {
    console.error('Contact endpoint error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    )
  }
}
