import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'Dalal M&E - Mechanical & Electrical Engineering Solutions',
  description: 'Premium mechanical and electrical engineering services. Expert HVAC, lighting control, and cold room solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navigation />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
