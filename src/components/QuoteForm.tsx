'use client'

import { useState } from 'react'
import { Loader, Send, FileText, CheckCircle2, AlertCircle, Cpu } from 'lucide-react'
import axios from 'axios'

interface QuoteData {
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

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteData>({
    projectType: 'hvac',
    projectSize: 'small',
    requirements: 'basic-cooling',
    location: '',
    email: '',
  })

  const [quote, setQuote] = useState<QuoteResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    setQuote(null)

    try {
      const response = await axios.post('/api/ai-quote', formData)
      setQuote(response.data)
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Failed to generate quote')
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Section */}
        <div className="lg:col-span-7">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Project Specifications</h2>
            <p className="text-gray-500">Provide the core details of your engineering requirements.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Project Discipline
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
                >
                  <option value="hvac">HVAC System Design</option>
                  <option value="coldroom">Cold Room Infrastructure</option>
                  <option value="electrical">Electrical Load Assessment</option>
                  <option value="lighting">Smart Lighting Control</option>
                  <option value="combination">Integrated M&E Solution</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Facility Scale
                </label>
                <select
                  name="projectSize"
                  value={formData.projectSize}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
                >
                  <option value="small">Boutique (up to 5,000 sq ft)</option>
                  <option value="medium">Commercial (5,000 - 25,000 sq ft)</option>
                  <option value="large">Industrial (25,000 - 100,000 sq ft)</option>
                  <option value="enterprise">Mega-Scale (100,000+ sq ft)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">
                Load Complexity
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'basic-cooling', label: 'Standard' },
                  { id: 'medium-load', label: 'High-Density' },
                  { id: 'heavy-load', label: 'Critical' },
                  { id: 'industrial', label: 'Heavy-Industrial' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, requirements: opt.id }))}
                    className={`px-4 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                      formData.requirements === opt.id 
                      ? 'border-accent bg-accent text-white shadow-lg shadow-accent/20' 
                      : 'border-slate-100 bg-slate-50 text-gray-500 hover:border-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Business Bay, Dubai"
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Technical Contact (Email)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="engineering@company.com"
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white transition-all outline-none text-primary font-medium"
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3">
                <AlertCircle size={20} />
                <span className="font-medium">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader size={24} className="animate-spin" />
                  Analyzing Parameters...
                </>
              ) : (
                <>
                  Generate AI Quote
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Result Section */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            {quote ? (
              <div className="bg-primary text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 -translate-y-16 translate-x-16 rounded-full blur-3xl group-hover:opacity-40 transition-opacity" />
                
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Estimated Budget</h3>
                    <p className="text-blue-200 text-sm">Preliminary AI Assessment</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Cost Range</div>
                    <div className="text-5xl font-black text-accent">{quote.costEstimate}</div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Target Timeline</div>
                    <div className="text-3xl font-bold">{quote.duration}</div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Technical Summary</div>
                    <p className="text-gray-300 leading-relaxed italic">"{quote.summary}"</p>
                  </div>

                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <button className="py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                      <FileText size={18} />
                      PDF
                    </button>
                    <button className="py-4 bg-accent text-white font-bold rounded-2xl hover:bg-accent-hover transition-colors">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[600px] border-4 border-dashed border-slate-200 rounded-[40px] flex flex-col items-center justify-center p-12 text-center text-slate-400">
                <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-6">
                  <Cpu size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-500 mb-4">Awaiting Parameters</h3>
                <p className="text-lg">
                  Fill in your project details to trigger our real-time engineering estimation engine.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
