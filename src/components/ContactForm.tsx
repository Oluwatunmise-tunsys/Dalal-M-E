'use client'

import { useState } from 'react'
import { Loader, Check, Send, User, Mail, Phone, Building2, ChevronDown } from 'lucide-react'
import axios from 'axios'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await axios.post('/api/contact', formData)
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Failed to send message')
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
              className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={20} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 XX XXX XXXX"
              className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Organization</label>
          <div className="relative group">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={20} />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Inquiry Type</label>
        <div className="relative">
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium appearance-none"
          >
            <option value="">Select Project Category</option>
            <option value="quote-inquiry">HVAC / Mechanical Quote</option>
            <option value="electrical">Electrical / Power Systems</option>
            <option value="automation">Lighting & Automation</option>
            <option value="support">Service & Maintenance</option>
            <option value="other">Other Inquiry</option>
          </select>
          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Detailed Requirements</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your project or inquiry in detail..."
          required
          rows={6}
          className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium resize-none"
        />
      </div>

      {error && (
        <div className="p-5 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
          {error}
        </div>
      )}

      {success && (
        <div className="p-5 bg-green-50 border border-green-100 text-green-700 rounded-2xl text-sm font-bold flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
          <Check className="bg-green-600 text-white rounded-full p-0.5" size={18} />
          Your request has been prioritized. A technical consultant will contact you shortly.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-5 bg-accent text-white font-bold rounded-2xl hover:bg-accent-hover transition-all duration-300 shadow-xl shadow-accent/20 flex items-center justify-center gap-3 group disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader size={24} className="animate-spin" />
            Transmitting...
          </>
        ) : (
          <>
            Transmit Inquiry
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400 font-medium italic">
        * Dalal M&E strictly adheres to GDPR and local data protection regulations.
      </p>
    </form>
  )
}
