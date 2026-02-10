import Link from 'next/link'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Global Logistics Hub HVAC Optimization',
      category: 'Mechanical Engineering',
      location: 'Dubai, UAE',
      year: '2023',
      description: 'Integrated VRF system with AI-driven load balancing for a 150,000 sq ft logistics center.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
      stats: ['40% Energy Reduction', 'Zero Downtime During Install'],
    },
    {
      title: 'Metro Financial Center Electrical Retrofit',
      category: 'Electrical Engineering',
      location: 'Abu Dhabi, UAE',
      year: '2023',
      description: 'Complete high-voltage switchgear replacement and UPS integration for a Tier-3 Data Center.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      stats: ['99.999% Reliability', 'Smart Grid Ready'],
    },
    {
      title: 'PharmaCore Cold Chain Infrastructure',
      category: 'Cold Room Solutions',
      location: 'Sharjah, UAE',
      year: '2022',
      description: 'Precision temperature and humidity control systems for vaccine storage facilities.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070',
      stats: ['±0.2°C Temperature Stability', 'FDA Compliant'],
    },
    {
      title: 'Smart City Lighting Control Project',
      category: 'Lighting Control',
      location: 'Dubai, UAE',
      year: '2024',
      description: 'Deployment of DALI-2 centralized lighting control across 15 government buildings.',
      image: 'https://images.unsplash.com/photo-1760553120209-8e9d5d2493e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U21hcnQlMjBDaXR5JTIwTGlnaHRpbmclMjBDb250cm9sJTIwUHJvamVjdHxlbnwwfDB8MHx8fDA%3D',
      stats: ['65% Lighting Energy Savings', 'IoT Integrated'],
    },
    {
      title: 'Industrial Automation Hub',
      category: 'Automation',
      location: 'Fujairah, UAE',
      year: '2023',
      description: 'SCADA and BMS integration for a multi-purpose manufacturing complex.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      stats: ['Centralized Control', 'Predictive Maintenance Active'],
    },
    {
      title: 'Luxury Resort District Cooling',
      category: 'Mechanical Engineering',
      location: 'Ras Al Khaimah, UAE',
      year: '2022',
      description: 'High-capacity chiller plant and district cooling network for a premium 5-star resort.',
      image: 'https://media.istockphoto.com/id/2240982456/photo/clean-public-pool-area-with-white-chairs-lining-the-poolside.webp?a=1&b=1&s=612x612&w=0&k=20&c=Df6KzNieKiCmGoh7FUUVQGw1GJwXwsg9oH-6gOd_pbg=',
      stats: ['Eco-Friendly Refrigerants', 'Quiet Operation Design'],
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1541888941259-79974df19644?q=80&w=2070" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Portfolio of <span className="text-accent">Precision.</span></h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            A showcase of our most complex mechanical and electrical engineering achievements across the Middle East.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl border border-gray-100 group">
                <div className="h-64 md:h-80 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-2">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-accent text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-500 font-medium mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent md:w-4 md:h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-accent md:w-4 md:h-4" />
                      {project.year}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100">
                        <div className="text-accent font-bold text-sm md:text-base">{stat}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-sm md:text-base">
                    View Case Study <ArrowRight size={18} className="text-accent md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: '2.5M+', label: 'Square Feet Engineered' },
              { value: '150MW+', label: 'Power Managed' },
              { value: '45k+', label: 'BTUs Optimized' },
              { value: '250+', label: 'Active Service Contracts' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-gray-400 text-[10px] md:text-sm font-semibold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Project is Our Next Success</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Leverage our cross-disciplinary expertise to deliver your engineering project on time and under budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="button-primary px-8 md:px-12 py-4 w-full sm:w-auto text-center">
              Contact Our Project Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
