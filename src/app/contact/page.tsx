import { Mail, Phone, MapPin, MessageSquare, Shield } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero Header */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
            alt="Office Contact" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's <span className="text-accent">Connect.</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Discuss your next engineering challenge with our technical team. We're here to provide clarity and expertise.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding -mt-16 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-10 rounded-[40px] shadow-xl border border-white">
                <h2 className="text-2xl font-bold text-primary mb-8">Technical Support</h2>
                <div className="space-y-8">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-sm uppercase tracking-widest mb-1">Email</h3>
                      <p className="text-gray-600 font-medium"> info@dalalsteel.com</p>
                      <p className="text-gray-400 text-sm">Response within 1 hr</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-sm uppercase tracking-widest mb-1">Direct Line</h3>
                      <p className="text-gray-600 font-medium">+234 814 069 7543</p>
                      <p className="text-gray-400 text-sm">Mon-Sat, 9am-8pm</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-sm uppercase tracking-widest mb-1">Headquarters</h3>
                      <p className="text-gray-600 font-medium">Lagos</p>
                      <p className="text-gray-400 text-sm">Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-primary mb-4">
                    <Shield size={20} className="text-accent" />
                    <span className="font-bold">Encrypted Communication</span>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    All technical specifications shared through our portal are protected by industrial-grade SSL encryption.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-8">
              <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl border border-white">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-primary mb-4">Inquiry Form</h2>
                  <p className="text-gray-500">Select your project type and let us know how we can assist.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-primary mb-4">Consultation FAQs</h2>
              <p className="text-xl text-gray-500">Answers to common technical and operational questions.</p>
            </div>
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <MessageSquare size={24} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is the standard lead time for a site audit?',
                a: 'Typically, we can deploy a technical team to your site within 24-48 hours of a confirmed inquiry in the Dubai/Abu Dhabi area.',
              },
              {
                q: 'Do you provide emergency 24/7 M&E maintenance?',
                a: 'Yes, we offer platinum-tier service contracts that include 24/7 on-call engineering support for critical infrastructure.',
              },
              {
                q: 'Is the AI quote binding for contract purposes?',
                a: 'The AI quote is a preliminary technical estimate with ±5% variance. A final binding quote is issued following a site survey.',
              },
              {
                q: 'Are your designs compliant with international ASHRAE standards?',
                a: 'Absolutely. All Dalal M&E designs meet or exceed ASHRAE, DEWA, and ADDC international standards.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-primary transition-all duration-500">
                <h3 className="text-xl font-bold text-primary group-hover:text-white mb-4 transition-colors">{item.q}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
