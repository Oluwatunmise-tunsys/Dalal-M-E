import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-blue-400 to-accent" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 md:gap-3 mb-8 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image 
                  src="https://tse3.mm.bing.net/th/id/OIP.lhu9SGD-9FWwgnfqzMSdGwHaGP?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Dalal M&E Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter leading-none text-white uppercase">
                  DALAL <span className="text-accent">M&E</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] mt-1 text-white/50">
                  Engineering | Electrical Services
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              Providing premium mechanical and electrical engineering solutions with a commitment to innovation and technical excellence.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Capabilities</h4>
            <ul className="space-y-4">
              {[
                { label: 'HVAC Solutions', href: '/services' },
                { label: 'Electrical Systems', href: '/services' },
                { label: 'Lighting Control', href: '/services' },
                { label: 'Cold Storage', href: '/services' },
                { label: 'Automation', href: '/services' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Projects', href: '/projects' },
                { label: 'Get a Quote', href: '/quote' },
                { label: 'Contact', href: '/contact' },
                { label: 'Careers', href: '#' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={20} />
                </div>
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                  <Phone size={20} />
                </div>
                <a href="tel:+97140000000" className="hover:text-white transition-colors">+234 814 069 7543</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@dalalme.com" className="hover:text-white transition-colors">info@dalalsteel.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dalal M&E Engineering|Electrical Services. by Abraham Emmanuel Oluwatunmise.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

