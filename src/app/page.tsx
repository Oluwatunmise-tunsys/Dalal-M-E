import Link from 'next/link'
import { ArrowRight, CheckCircle2, Lightbulb, Fan, ShieldCheck, Cpu, Zap } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'Mechanical Engineering',
      description: 'Expert HVAC systems, specialized cooling, and plumbing solutions for complex industrial environments.',
      image: 'https://media.istockphoto.com/id/2211719481/photo/technician-with-screwdriver-repairing-air-conditioner-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=jgXsFwah9TmgEV1m6MXRy3_BqpA0V6zJ5q4AkWw4vM4=',
      icon: Fan,
    },
    {
      title: 'Electrical Engineering',
      description: 'Power distribution, high-voltage systems, and comprehensive electrical infrastructure design.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3RyaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8MHwwfHx8MA%3D%3D',
      icon: Zap,
    },
    {
      title: 'Lighting Control',
      description: 'Intelligent, energy-efficient lighting solutions that transform spaces and optimize energy usage.',
      image: 'https://media.istockphoto.com/id/1289224006/photo/high-warehouse-indoor-led-lighting.webp?a=1&b=1&s=612x612&w=0&k=20&c=zParp6SsWbtjf0Oa1NpekBQCNyhLSH1T7LdqQ54iVdw=',
      icon: Lightbulb,
    },
    {
      title: 'Industrial Automation',
      description: 'Cutting-edge automation and control systems designed to enhance operational efficiency and precision.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      icon: Cpu,
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3RydWN0aW9uJTIwY29tcGFueXxlbnwwfDB8MHx8fDA%3D" 
            alt="Engineering Hero" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs md:text-sm font-medium tracking-wide uppercase">Dalal M&E Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Advancing Engineering <br />
              <span className="text-accent">Through Innovation.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Dalal M&E delivers high-performance Mechanical and Electrical solutions tailored for industrial excellence and commercial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <Link href="/quote" className="button-primary group px-8 py-4 text-lg text-center sm:text-left">
                Get AI Quote <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="button-secondary border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg text-center sm:text-left">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-10 md:py-12 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Expert Engineers', value: '40+' },
              { label: 'Industries Served', value: '12+' },
              { label: 'Client Satisfaction', value: '100%' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Core Competencies</h2>
              <p className="text-lg md:text-xl text-gray-600">
                We specialize in complex engineering challenges that require precision, innovation, and technical mastery.
              </p>
            </div>
            <Link href="/services" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl"
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-white group-hover:bg-white group-hover:text-accent transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 line-clamp-2 mb-4 group-hover:line-clamp-none transition-all duration-300">
                      {service.description}
                    </p>
                    <Link href="/services" className="inline-flex items-center text-accent font-semibold group-hover:text-white transition-colors">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative px-4 md:px-0">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
                alt="Professional Workspace" 
                className="rounded-2xl shadow-2xl relative z-10 w-full"
              />
              <div className="hidden md:block absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-2xl -z-0" />
              <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-accent rounded-tl-2xl z-20" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                Setting New Standards <br />
                <span className="text-accent">in Engineering Excellence</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'AI-Integrated Planning', desc: 'Leveraging advanced algorithms for precision sizing and cost estimation.' },
                  { title: 'Premium Hardware', desc: 'We only partner with world-class manufacturers for all M&E components.' },
                  { title: 'Global Compliance', desc: 'All projects meet and exceed international safety and efficiency standards.' },
                  { title: '24/7 Monitoring', desc: 'Remote system monitoring and predictive maintenance solutions.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="button-primary mt-10 w-full sm:w-auto text-center">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 md:skew-x-12 md:translate-x-32" />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Get an Instant Project Estimate
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Our AI-powered quotation engine analyzes your requirements to provide an accurate budget and timeline in under 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/quote" className="button-primary bg-white text-primary hover:bg-gray-100 text-center">
                  Generate Free Quote
                </Link>
                <Link href="/contact" className="button-secondary border-white text-white hover:bg-white hover:text-primary text-center">
                  Speak to an Expert
                </Link>
              </div>
            </div>
            
            <div className="glass-card p-6 sm:p-10 rounded-3xl max-w-md w-full border-white/10 mx-auto lg:mx-0">
              <div className="text-primary mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <span className="font-bold text-lg md:text-xl">Smart Assurance</span>
              </div>
              <p className="text-gray-600 mb-6 italic text-sm md:text-base">
                "Dalal M&E transformed our facility's lighting and HVAC efficiency. Their AI-driven approach was noticeably more precise than traditional contractors."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200" />
                <div>
                  <div className="font-bold text-primary text-sm md:text-base">Eng. Robert Smith</div>
                  <div className="text-xs md:text-sm text-gray-500">Facility Director, Global Logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
