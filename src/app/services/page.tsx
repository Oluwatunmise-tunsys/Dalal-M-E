import Link from 'next/link'
import { Fan, Zap, Lightbulb, Cpu, ShieldCheck, Thermometer, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Fan,
      title: 'Mechanical Engineering & HVAC',
      description: 'High-performance climate control and mechanical systems designed for industrial scale and precision.',
      image: 'https://media.istockphoto.com/id/1272177173/photo/industry-plant-concept-equipment-cables-and-piping-as-found-inside-of-a-modern-industrial.jpg?s=612x612&w=0&k=20&c=uw0gZg17p3yG4TcD5cJKtX2tOKNBPCkMEtbmpb8kC38=',
      features: [
        'Variable Refrigerant Flow (VRF) Systems',
        'Industrial Chiller Plant Optimization',
        'High-Precision Cleanroom HVAC',
        'Complex Ducting & Air Distribution',
      ],
    },
    {
      icon: Zap,
      title: 'Electrical Infrastructure',
      description: 'Robust power distribution and electrical systems ensuring 99.9% uptime for critical operations.',
      image: 'https://plus.unsplash.com/premium_photo-1661515203486-ab9c1770f486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlY3RyaWNhbHxlbnwwfDB8MHx8fDA%3D',
      features: [
        'High-Voltage Switchgear Installation',
        'Main LV Distribution Boards',
        'Uninterrupted Power Supply (UPS) Systems',
        'Lightning Protection & Earthing',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Intelligent Lighting Control',
      description: 'Smart lighting solutions that reduce energy consumption by up to 60% through automation.',
      image: 'https://media.istockphoto.com/id/1473175214/photo/smart-home-system-wall-and-woman-hands-with-digital-app-monitor-for-thermostat-heating.webp?a=1&b=1&s=612x612&w=0&k=20&c=LkclodNbF4-5rvYSpxZ5R6G6sxWMcc1WppFSNiORt60=',
      features: [
        'DALI & KNX Control Systems',
        'Daylight Harvesting Algorithms',
        'Occupancy-Based Load Shedding',
        'Centralized Management Dashboards',
      ],
    },
    {
      icon: Cpu,
      title: 'Industrial Automation',
      description: 'Integrating IoT and PLC systems for autonomous facility management and predictive maintenance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      features: [
        'SCADA System Implementation',
        'BMS (Building Management Systems)',
        'Remote Telemetry & Monitoring',
        'Automated Fault Detection',
      ],
    },
    {
      icon: Thermometer,
      title: 'Cold Room Solutions',
      description: 'Specialized thermal environments for pharmaceutical and food-grade storage compliance.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070',
      features: [
        'Ultra-Low Temperature Storage',
        'Redundant Cooling Circuits',
        'Humidity & CO2 Control',
        'FDA & ISO Compliance Verification',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Fire & Security Integration',
      description: 'Advanced fire suppression and security systems integrated into the core M&E infrastructure.',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080',
      features: [
        'Addressable Fire Alarm Systems',
        'Gas Suppression for Data Centers',
        'Access Control & CCTV Integration',
        'Emergency Evacuation Planning',
      ],
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-24" />
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-accent">Expertise.</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From initial load calculations to final commissioning, Dalal M&E provides a full spectrum of mechanical and electrical engineering services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-500">
                  <div className="h-48 relative overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-accent">
                      <Icon size={24} />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                          <CheckCircle2 size={16} className="text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/quote" className="inline-flex items-center text-accent font-bold group/link">
                      Request Quote <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" className="rounded-3xl shadow-2xl" alt="Methodology" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-primary mb-8">The AI-Driven Methodology</h2>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Data-Centric Auditing', desc: 'We begin with high-resolution sensors and audits to capture real-time operational data.' },
                  { step: '02', title: 'Generative Design', desc: 'Our AI engines simulate thousands of design variations to find the optimal balance of cost and efficiency.' },
                  { step: '03', title: 'Precision Implementation', desc: 'Hardware is installed with surgical precision, guided by the data models created during design.' },
                  { step: '04', title: 'Iterative Optimization', desc: 'Post-installation, we continuously tune systems based on actual performance metrics.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-3xl font-black text-accent/20">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <div className="glass-card p-12 md:p-20 rounded-[40px] border border-white">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Need a Custom Engineering Solution?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Tell us about your project requirements and let our AI-powered system generate a preliminary technical scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="button-primary px-12 py-4">
                Get AI Quotation
              </Link>
              <Link href="/contact" className="button-secondary px-12 py-4">
                Speak to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
