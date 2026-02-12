import { NextResponse } from 'next/server'
import { saveQuoteRequest } from '@/lib/supabase'

interface QuoteRequest {
  projectType: string
  projectSize: string
  requirements: string
  location: string
  email?: string
}

interface QuoteResponse {
  costEstimate: string
  duration: string
  summary: string
}

const generateQuoteWithAI = async (data: QuoteRequest): Promise<QuoteResponse> => {
  const openaiKey = process.env.OPENAI_API_KEY
  const groqKey = process.env.GROQ_API_KEY
  
  const apiKey = openaiKey || groqKey
  const baseUrl = groqKey ? 'https://api.groq.com/openai/v1' : 'https://api.openai.com/v1'
  const model = groqKey ? 'llama3-8b-8192' : 'gpt-3.5-turbo'

  if (!apiKey) {
    throw new Error('AI API key not configured')
  }

  const prompt = `You are an expert engineering consultant for Dalal M&E. Generate a professional cost estimate and timeline for the following project:

Project Type: ${data.projectType}
Project Size: ${data.projectSize}
Requirements/Load: ${data.requirements}
Location: ${data.location}

Provide your response in JSON format with exactly these fields:
{
  "costEstimate": "estimated cost range in USD (e.g., '$15,000 - $22,000')",
  "duration": "project timeline (e.g., '3-4 weeks')",
  "summary": "2-3 sentence professional summary of the quote and what's included"
}

Be realistic and professional in your estimates. Consider location, market rates, and complexity.`

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content:
              'You are an expert engineering consultant who provides accurate cost estimates and project timelines.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    const result = await response.json()
    const content = result.choices[0].message.content

    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Could not parse AI response as JSON')
    }

    const quote = JSON.parse(jsonMatch[0])
    return quote as QuoteResponse
  } catch (error) {
    console.error('AI Quote generation error:', error)
    return generateFallbackQuote(data)
  }
}

const generateFallbackQuote = (data: QuoteRequest): QuoteResponse => {
  const sizeMultiplier = {
    small: 0.8,
    medium: 1,
    large: 2,
    enterprise: 4,
  }[data.projectSize.toLowerCase()] || 1

  const typeMultiplier = {
    hvac: 1,
    coldroom: 1.2,
    electrical: 0.8,
    combination: 1.5,
  }[data.projectType.toLowerCase()] || 1

  const basePrice = 15000
  const costEstimate = Math.round(basePrice * sizeMultiplier * typeMultiplier)
  const costRange = `$${costEstimate - 5000} - $${costEstimate + 5000}`

  const durationDays = 14 * sizeMultiplier
  const durationWeeks = Math.ceil(durationDays / 7)

  return {
    costEstimate: costRange,
    duration: `${durationWeeks}-${durationWeeks + 1} weeks`,
    summary: `Your ${data.projectType} project in ${data.location} with ${data.projectSize} scale and ${data.requirements} requirements will require professional installation and configuration. This estimate includes materials, labor, and system testing.`,
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as QuoteRequest

    if (!data.projectType || !data.projectSize || !data.requirements || !data.location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const quote = await generateQuoteWithAI(data)

    // Save to Supabase (non-blocking)
    saveQuoteRequest({
      email: data.email || 'anonymous@dalalme.com',
      projectType: data.projectType,
      projectSize: data.projectSize,
      requirements: data.requirements,
      location: data.location,
      costEstimate: quote.costEstimate,
      duration: quote.duration,
      summary: quote.summary,
    }).catch(err => console.error('Failed to save quote to Supabase:', err))

    return NextResponse.json(quote)
  } catch (error) {
    console.error('Quote endpoint error:', error)
    return NextResponse.json(
      { error: 'Failed to generate quote. Please try again later.' },
      { status: 500 }
    )
  }
}
