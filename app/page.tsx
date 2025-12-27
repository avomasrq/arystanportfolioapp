'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <AboutMe />
      <CTA />
      <Footer />
    </main>
  )
}

