import QuoteForm from '@/components/QuoteForm'
import { ShieldCheck, Cpu, BarChart3, Clock } from 'lucide-react'

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
            alt="Engineering Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Precision <br /><span className="text-accent">Estimator.</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get an instant, data-driven quotation for your mechanical and electrical projects powered by our proprietary engineering algorithms.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-16 relative z-20">
        <div className="container-custom">
          <div className="glass-card rounded-[40px] p-8 md:p-12 shadow-2xl border-white/50">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Use Our AI Estimator?</h2>
            <p className="text-lg text-gray-600">Eliminating the wait-time and uncertainty of traditional bidding.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Clock, 
                title: 'Instant Results', 
                desc: 'Get a preliminary budget and timeline in under 120 seconds.' 
              },
              { 
                icon: BarChart3, 
                title: 'Data-Backed', 
                desc: 'Estimates are based on thousands of historical project metrics.' 
              },
              { 
                icon: Cpu, 
                title: 'Smart Sizing', 
                desc: 'Our AI calculates approximate capacity requirements automatically.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Reliability', 
                desc: '95% accuracy compared to final detailed engineer quotes.' 
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 shadow-sm">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Steps section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="bg-primary rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/4 h-full bg-accent opacity-5 skew-x-12 translate-x-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Next Steps After Your Quote</h2>
                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Review & Adjust', desc: 'Fine-tune the parameters in our interactive dashboard to see how costs change.' },
                    { step: '02', title: 'Site Inspection', desc: 'Schedule a physical or virtual site audit with one of our senior engineers.' },
                    { step: '03', title: 'Detailed Proposal', desc: 'Receive a comprehensive technical submittal and final contract within 48 hours.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="text-2xl font-black text-accent">{item.step}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" 
                    className="w-full h-full object-cover rounded-2xl opacity-80" 
                    alt="Engineering detail" 
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-100 mb-1 text-center">Accuracy Rating</p>
                  <p className="text-3xl font-black text-center">98.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
