import { NextResponse } from 'next/server'
import { saveChatMessage } from '@/lib/supabase'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  conversationHistory?: ChatMessage[]
  userEmail?: string
  userName?: string
}

const generateChatResponse = async (request: ChatRequest) => {
  const openaiKey = process.env.OPENAI_API_KEY
  const groqKey = process.env.GROQ_API_KEY
  
  const apiKey = openaiKey || groqKey
  const baseUrl = groqKey ? 'https://api.groq.com/openai/v1' : 'https://api.openai.com/v1'
  const model = groqKey ? 'llama3-8b-8192' : 'gpt-3.5-turbo'

  if (!apiKey) {
    throw new Error('AI API key not configured')
  }

  const systemPrompt = `You are Dalal M&E AI Assistant, a professional and expert engineering consultant. 
You help clients with:
- Mechanical Engineering (HVAC, Cold Rooms, Plumbing)
- Electrical Engineering (Lighting Control, Power Systems, Load Calculations)
- Industrial Automation and Specialized Solutions
- Project Estimation and Technical Guidance

Maintain a premium, professional, and authoritative tone. Keep responses concise and accurate.`

  const messages: ChatMessage[] = [
    ...(request.conversationHistory || []),
    {
      role: 'user',
      content: request.message,
    },
  ]

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
            content: systemPrompt,
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    const result = await response.json()
    const reply = result.choices[0].message.content

    const suggestedFollowUps = generateFollowUpSuggestions(request.message)

    return {
      reply,
      suggestedFollowUps,
    }
  } catch (error) {
    console.error('Chat generation error:', error)
    return generateFallbackResponse(request.message)
  }
}

const generateFollowUpSuggestions = (userMessage: string): string[] => {
  const suggestions = [
    "Tell me more about your project size",
    "Get an instant AI quote",
    "Schedule a consultation call",
  ]

  if (userMessage.toLowerCase().includes('hvac')) {
    suggestions.push('What HVAC capacity do you need?')
  }
  if (userMessage.toLowerCase().includes('cold') || userMessage.toLowerCase().includes('cooling')) {
    suggestions.push('Discuss cold room specifications')
  }
  if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
    suggestions.push('Generate a detailed quote')
  }

  return suggestions.slice(0, 3)
}

const generateFallbackResponse = (userMessage: string) => {
  let reply = "Thank you for your question! "

  if (userMessage.toLowerCase().includes('hvac')) {
    reply +=
      "We specialize in HVAC system design and installation. Could you tell me more about your space size and cooling requirements?"
  } else if (userMessage.toLowerCase().includes('cold') || userMessage.toLowerCase().includes('cooling')) {
    reply +=
      "For cold room solutions, we provide custom designs based on your capacity and temperature requirements. What's your storage need?"
  } else if (userMessage.toLowerCase().includes('electrical')) {
    reply +=
      "We can assess your electrical load requirements and design appropriate systems. What's the nature of your electrical needs?"
  } else if (userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
    reply +=
      "For accurate pricing, I recommend using our AI Quotation system above or scheduling a consultation to discuss your specific project."
  } else {
    reply +=
      "Our team can help with HVAC systems, cold room solutions, and electrical load planning. What project are you working on?"
  }

  return {
    reply,
    suggestedFollowUps: [
      "Get an instant AI quote",
      "Schedule a consultation",
      "Tell me more about your project",
    ],
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ChatRequest

    if (!body.message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const chatResponse = await generateChatResponse(body)

    // Save to Supabase (non-blocking)
    saveChatMessage({
      userEmail: body.userEmail,
      userMessage: body.message,
      assistantReply: chatResponse.reply,
    }).catch(err => console.error('Failed to save chat to Supabase:', err))

    return NextResponse.json(chatResponse)
  } catch (error) {
    console.error('Chat endpoint error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message. Please try again.' },
      { status: 500 }
    )
  }
}
