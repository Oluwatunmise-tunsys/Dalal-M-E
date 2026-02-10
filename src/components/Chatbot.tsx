'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, MessageSquare, X, Loader, ShieldCheck, Sparkles } from 'lucide-react'
import axios from 'axios'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatResponse {
  reply: string
  suggestedFollowUps: string[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Welcome to Dalal M&E. I'm your engineering assistant. How can I help you with your mechanical, electrical, or lighting control project today?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [suggestedFollowUps, setSuggestedFollowUps] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return

    const userMessage = messageText.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)
    setSuggestedFollowUps([])

    try {
      const response = await axios.post<ChatResponse>('/api/ai-chat', {
        message: userMessage,
        conversationHistory: messages,
      })

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: response.data.reply,
        },
      ])

      setSuggestedFollowUps(response.data.suggestedFollowUps)
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'I apologize, but I encountered a technical connectivity issue. Please try again or contact our engineering team directly at info@dalalme.com.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-accent text-white rounded-2xl shadow-2xl shadow-accent/40 hover:bg-accent-hover transition-all flex items-center justify-center hover:scale-110 group"
        aria-label="Open technical chat"
      >
        <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-white text-accent text-[10px] font-bold rounded-full flex items-center justify-center shadow-md border border-accent/20">
          AI
        </span>
      </button>
    )
  }

  return (
    <div className="fixed bottom-8 right-8 z-[60] w-[400px] bg-white rounded-[32px] shadow-2xl flex flex-col max-h-[700px] border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-primary text-white p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 -translate-y-16 translate-x-16 rounded-full blur-2xl" />
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-bold tracking-tight">Dalal M&E Assistant</h3>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Engineering AI Active</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-5 py-4 rounded-2xl shadow-sm ${
                message.role === 'user'
                  ? 'bg-accent text-white rounded-br-none'
                  : 'bg-white text-primary border border-slate-100 rounded-bl-none'
              }`}
            >
              <p className="text-sm leading-relaxed font-medium whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 px-5 py-4 rounded-2xl rounded-bl-none flex items-center gap-3">
              <Loader size={18} className="animate-spin text-accent" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Analyzing Requirements...</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Follow-ups */}
      {suggestedFollowUps.length > 0 && (
        <div className="px-6 py-4 bg-white border-t border-slate-100">
          <div className="flex flex-wrap gap-2">
            {suggestedFollowUps.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(suggestion)}
                className="text-xs px-4 py-2 bg-slate-50 text-primary border border-slate-200 rounded-full hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 font-bold"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-6 bg-white border-t border-slate-100">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage(input)
              }
            }}
            placeholder="Ask a technical question..."
            className="w-full pl-5 pr-14 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary text-sm font-medium"
            disabled={loading}
          />
          <button
            onClick={() => handleSendMessage(input)}
            disabled={loading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center hover:bg-accent-hover transition-colors disabled:opacity-50"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 opacity-30">
          <ShieldCheck size={12} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Confidential Data Protocol</span>
        </div>
      </div>
    </div>
  )
}
