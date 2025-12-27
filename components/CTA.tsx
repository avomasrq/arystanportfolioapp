'use client'

import { useState, useEffect, useRef } from 'react'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isVisible) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      const minTime = Date.now() - (typeof window !== 'undefined' ? window.performance.timing.navigationStart : 0) > 5500
      
      if (rect.top < windowHeight + 100 && rect.top > windowHeight - 200 && minTime) {
        setIsVisible(true)
      }
    }

    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }, 5500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className={`cta-left-column ${isVisible ? 'animate-cta-slide-in-left' : 'cta-hidden-left'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">
              Book a consultation - no pressure, just clarity.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://calendly.com/arylovessway/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-1 px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors rounded-sm text-center"
              >
                Book your Consultation
              </a>
              <a 
                href="https://wa.me/34655269954"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-2 px-8 py-4 border border-white text-white font-medium hover:bg-white/10 transition-colors rounded-sm text-center"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:arystan909@yahoo.com"
                className="cta-button-3 px-8 py-4 border border-white text-white font-medium hover:bg-white/10 transition-colors rounded-sm text-center"
              >
                Email me
              </a>
            </div>

            <p className="cta-disclaimer text-white/60 text-xs leading-relaxed max-w-md">
              By using this site or submitting a consultation request, you agree
              to our{' '}
              <a href="#terms" className="underline hover:text-white/80">
                Terms, Privacy & Cookies
              </a>
              . Your data is stored securely and never shared without your
              consent.
            </p>
          </div>

          <div className={`cta-right-column flex flex-col md:flex-row gap-8 lg:gap-12 ${isVisible ? 'animate-cta-slide-in-right' : 'cta-hidden-right'}`}>
            <div className="cta-links-group">
              <h3 className="text-white font-semibold mb-4 text-lg">
                Quick links:
              </h3>
              <ul className="space-y-2">
                <li className="cta-link-item-0">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li className="cta-link-item-1">
                  <a
                    href="#about"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li className="cta-link-item-2">
                  <a
                    href="https://y-entrepreneurs.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Y Entrepreneurs
                  </a>
                </li>
                <li className="cta-link-item-3">
                  <a
                    href="https://www.elevatify.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Elevatify
                  </a>
                </li>
                <li className="cta-link-item-4">
                  <a
                    href="https://www.counselai.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    CounselAI
                  </a>
                </li>
              </ul>
            </div>

            <div className="cta-social-group">
              <h3 className="text-white font-semibold mb-4 text-lg">
                Social media:
              </h3>
              <ul className="space-y-2">
                <li className="cta-social-item-0">
                  <a
                    href="https://www.linkedin.com/in/arystan-tanekov-089639338?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="cta-social-item-1">
                  <a
                    href="https://www.instagram.com/a.tanekov?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li className="cta-social-item-2">
                  <a
                    href="https://x.com/mrlustt_?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="cta-address-group">
              <h3 className="text-white font-semibold mb-4 text-lg">
                Address:
              </h3>
              <a
                href="https://maps.google.com/?q=C.+Ribera,+Local+B,+Nueva+Andalucía,+29660+Marbella,+Málaga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                C. Ribera, Local B, Nueva Andalucía, 29660 Marbella, Málaga
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
