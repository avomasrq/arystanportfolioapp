'use client'

import { useState, useEffect, useRef } from 'react'

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollUnlocked, setScrollUnlocked] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const lockPositionRef = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasTriggered) return

      const heroComplete = Date.now() - (typeof window !== 'undefined' ? window.performance.timing.navigationStart : 0) > 2500
      if (!heroComplete) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      if (rect.top < windowHeight + 100 && rect.top > windowHeight - 200 && !hasTriggered && !isAnimating) {
        lockPositionRef.current = window.scrollY
        setHasTriggered(true)
        setIsAnimating(true)
        setIsVisible(true)
        
        window.scrollTo(0, lockPositionRef.current)
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        
        setTimeout(() => {
          setScrollUnlocked(true)
          setIsAnimating(false)
          document.body.style.overflow = 'auto'
          document.documentElement.style.overflow = 'auto'
        }, 2500)
      }
    }

    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }, 2500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasTriggered, isAnimating])


  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return

      const heroComplete = Date.now() - (typeof window !== 'undefined' ? window.performance.timing.navigationStart : 0) > 2500

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const isNearSection = rect.top < windowHeight + 300 && rect.top > -200

      if (e.deltaY > 0 && isNearSection && !hasTriggered && !isAnimating && heroComplete) {
        e.preventDefault()
        lockPositionRef.current = window.scrollY
        setHasTriggered(true)
        setIsAnimating(true)
        setIsVisible(true)
        
        window.scrollTo(0, lockPositionRef.current)
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        
        setTimeout(() => {
          setScrollUnlocked(true)
          setIsAnimating(false)
          document.body.style.overflow = 'auto'
          document.documentElement.style.overflow = 'auto'
        }, 2500)
      } else if (isAnimating && !scrollUnlocked) {
        e.preventDefault()
        window.scrollTo(0, lockPositionRef.current)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isAnimating && !scrollUnlocked) {
        e.preventDefault()
        window.scrollTo(0, lockPositionRef.current)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return

      const heroComplete = Date.now() - (typeof window !== 'undefined' ? window.performance.timing.navigationStart : 0) > 2500

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const isNearSection = rect.top < windowHeight + 300 && rect.top > -200

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (isNearSection && !hasTriggered && !isAnimating && heroComplete) {
          e.preventDefault()
          lockPositionRef.current = window.scrollY
          setHasTriggered(true)
          setIsAnimating(true)
          setIsVisible(true)
          
          window.scrollTo(0, lockPositionRef.current)
          document.body.style.overflow = 'hidden'
          document.documentElement.style.overflow = 'hidden'
          
          setTimeout(() => {
            setScrollUnlocked(true)
            setIsAnimating(false)
            document.body.style.overflow = 'auto'
            document.documentElement.style.overflow = 'auto'
          }, 2500)
        } else if (isAnimating && !scrollUnlocked) {
          e.preventDefault()
          window.scrollTo(0, lockPositionRef.current)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
    }
  }, [hasTriggered, isAnimating, scrollUnlocked])

  useEffect(() => {
    if (hasTriggered && scrollUnlocked) {
      setIsVisible(true)
    }
  }, [hasTriggered, scrollUnlocked])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-6 lg:px-8 bg-black overflow-hidden">
      <div className={`absolute inset-0 flex items-center justify-center z-0 ${isVisible ? 'animate-about-bg-text' : 'about-bg-text-hidden'}`}>
        <h2 className="text-7xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold text-white/10 uppercase tracking-tighter leading-none select-none pointer-events-none">
          ABOUT ME
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'animate-about-fade-in' : 'about-hidden'}`}>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-about-fade-in' : 'about-hidden'}`}>
          <div className="space-y-8 text-white/80 text-lg md:text-xl leading-relaxed">
            <p>
              Hi, my name is <span className="text-white font-semibold">Arystan</span>, and I&apos;m from <span className="text-white font-semibold">Almaty, Kazakhstan</span>. I&apos;m a full-stack developer, startup builder, and the owner of my own online marketing agency. I&apos;m also a high school student in Grade 11, combining real-world experience with ambitious goals.
            </p>
          </div>
        </div>

        <div className={`mt-20 max-w-4xl mx-auto ${isVisible ? 'animate-about-slide-in-left' : 'about-hidden-left'}`}>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            Experience
          </h3>
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              I&apos;ve completed two internships at <span className="text-white font-semibold">Kcell</span> and <span className="text-white font-semibold">BTS Digital</span>, was invited by the <span className="text-white font-semibold">Algoverse AI Research Program</span>, and I&apos;ve built two apps: <span className="text-white font-semibold">CounselAI</span> and <span className="text-white font-semibold">Elevatify</span>.
            </p>
          </div>
        </div>

        <div className={`mt-20 max-w-4xl mx-auto ${isVisible ? 'animate-about-slide-in-right' : 'about-hidden-right'}`}>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            Languages
          </h3>
          <div className="space-y-4">
            <p className="text-white/80 text-lg leading-relaxed">
              I speak four languages: <span className="text-white font-semibold">Kazakh</span> (native), <span className="text-white font-semibold">Russian</span>, <span className="text-white font-semibold">English</span>, and <span className="text-white font-semibold">Spanish</span>.
            </p>
          </div>
        </div>

        <div className={`mt-32 text-center max-w-4xl mx-auto ${isVisible ? 'animate-about-fade-in-delay-2' : 'about-hidden'}`}>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            My Mission
          </h3>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Build revolutionary products that improve human life and help people in need.
          </p>
        </div>
      </div>
    </section>
  )
}
