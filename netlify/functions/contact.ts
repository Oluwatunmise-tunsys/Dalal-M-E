import { Handler } from '@netlify/functions'

interface ContactRequest {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const data = JSON.parse(event.body || '{}') as ContactRequest

    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
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

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Your message has been received. We will get back to you soon.',
      }),
    }
  } catch (error) {
    console.error('Contact endpoint error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process your request. Please try again later.',
      }),
    }
  }
}

export { handler }
