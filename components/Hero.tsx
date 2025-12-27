'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [showText, setShowText] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollUnlocked, setScrollUnlocked] = useState(false)
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollUnlocked || isAnimating) {
        e.preventDefault()
        if (!showText && !isAnimating && !hasAnimatedOnce) {
          setIsAnimating(true)
          setShowText(true)
          setHasAnimatedOnce(true)
          setTimeout(() => {
            setScrollUnlocked(true)
            setIsAnimating(false)
          }, 2400)
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrollUnlocked || isAnimating) {
        e.preventDefault()
        if (!showText && !isAnimating) {
          setIsAnimating(true)
          setShowText(true)
          setTimeout(() => {
            setScrollUnlocked(true)
            setIsAnimating(false)
          }, 2400)
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!scrollUnlocked || isAnimating) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault()
          if (!showText && !isAnimating) {
            setIsAnimating(true)
            setShowText(true)
            setTimeout(() => {
              setScrollUnlocked(true)
              setIsAnimating(false)
            }, 2400)
          }
        }
      }
    }

    if (!scrollUnlocked || isAnimating) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
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
  }, [showText, scrollUnlocked, isAnimating, hasAnimatedOnce])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && scrollUnlocked && hasAnimatedOnce) {
        setScrollUnlocked(true)
      }
    }

    if (scrollUnlocked) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollUnlocked, hasAnimatedOnce])

  useEffect(() => {
    if (hasAnimatedOnce && !showText) {
      setShowText(true)
      setScrollUnlocked(true)
    }
  }, [hasAnimatedOnce, showText])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`relative w-full h-full ${showText ? 'background-parallax' : ''}`}>
          {!imageError ? (
            <Image
              src="/portrait.jpg"
              alt="Arystan Tanekov"
              fill
              className="object-cover object-center transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              priority
              quality={90}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center">
              <span className="text-white/20 text-sm">Add your portrait image as /public/portrait.jpg</span>
            </div>
          )}
          <div className={`absolute inset-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${showText ? 'bg-black/50' : 'bg-black/10'}`}></div>
          <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${showText ? 'opacity-100' : 'opacity-0'} bg-gradient-radial from-transparent via-transparent to-black/30`}></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center perspective-1000">
          <div className={`text-3d-container ${showText ? 'animate-text-forward' : 'text-hidden'}`}>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl [text-shadow:0_0_30px_rgba(255,255,255,0.3),0_0_60px_rgba(255,255,255,0.1)]">
              <span className="block text-3d-layer-1">STOP PLAYING</span>
              <span className="block mt-4 text-3d-layer-2">SMALL.</span>
            </h2>
          </div>
        </div>

        <div className={`mt-12 text-center max-w-3xl mx-auto ${showText ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-lg">
          For the young founder rewriting possibility itself — where clarity sharpens vision, and creativity becomes the blueprint of a future the world isn&apos;t ready for yet.
          </p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all z-50"
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5L5 10L6.5 11.5L10 8L13.5 11.5L15 10L10 5Z"
            fill="white"
          />
        </svg>
      </button>
    </section>
  )
}
