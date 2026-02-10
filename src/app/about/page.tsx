import { Users, Target, Lightbulb, Award, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Technical Precision',
      description: 'We adhere to the strictest engineering tolerances, ensuring every system is optimized for maximum performance and longevity.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Edge',
      description: 'By integrating AI-driven analysis with traditional M&E principles, we provide smarter solutions that reduce energy costs and environmental impact.',
    },
    {
      icon: ShieldCheck,
      title: 'Operational Integrity',
      description: 'Safety and compliance are at our core. Every project meets global standards for reliability and industrial security.',
    },
    {
      icon: Users,
      title: 'Collaborative Engineering',
      description: 'We work as an extension of your team, providing expert guidance from initial feasibility studies to long-term maintenance.',
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Pioneering <br /><span className="text-accent">M&E Excellence</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">
            DALAL M&E specializes in providing comprehensive supply, installation, and testing services within the electrical, mechanical, and smart building sectors. Our expertise lies in designing and installing electrical and mechanical systems, as well as implementing smart building solutions. With a track record of successfully completed projects, we prioritize delivering high-quality equipment and materials at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold rounded-md mb-4 uppercase tracking-wider text-sm">
                Our Philosophy
              </div>
              <h2 className="text-4xl font-bold text-primary mb-8 leading-tight">Beyond Traditional Engineering</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded on decades of technical expertise, Dalal M&E was established to bridge the gap between traditional engineering excellence and the digital future. We believe that modern facilities require more than just hardware; they require intelligence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach combines rigorous mechanical and electrical design with advanced AI-powered simulations. This unique synergy allows us to predict system behavior, optimize energy consumption, and deliver solutions that are significantly more efficient than industry standards.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Years Expertise</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Global Projects</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
                alt="Engineering Team" 
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-10 -right-10 bg-accent text-white p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
                <p className="text-lg font-bold mb-2">"Precision is not just a goal, it's our standard."</p>
                <p className="text-sm text-blue-100">— Lead Engineer, Dalal M&E</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every design, every installation, and every client relationship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team/Capability */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary rounded-[32px] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-10 skew-x-12 translate-x-20" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">World-Class Engineering Capability</h2>
                <p className="text-xl text-gray-300 mb-10">
                  Our team consists of certified engineers, automation specialists, and energy consultants who bring a wealth of international experience to every project.
                </p>
                <div className="space-y-4">
                  {[
                    'Certified HVAC & Refrigeration Engineers',
                    'High-Voltage Electrical Specialists',
                    'Building Automation & IoT Experts',
                    'ISO 9001 & 14001 Compliant Processes',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <Award size={14} />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://media.istockphoto.com/id/2229802767/photo/industrial-evaporator-air-cooler-fan-for-cold-storage-room-freezers-in-an-abattoir-industrial.webp?a=1&b=1&s=612x612&w=0&k=20&c=s6Xywktz6PzQjC6L92imeON7u4xG-5va-VxxyNUgCXM=" className="rounded-2xl h-48 w-full object-cover" alt="Eng 1" />
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070" className="rounded-2xl h-48 w-full object-cover mt-8" alt="Eng 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Experience the Dalal Standard</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Ready to optimize your facility's performance? Contact us for a technical consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="button-primary px-10 py-4">
              Get an Instant Quote
            </Link>
            <Link href="/contact" className="button-secondary px-10 py-4">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
