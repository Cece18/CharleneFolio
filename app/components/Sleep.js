'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

export default function Sleep({ onWake }) {
  const [currentTime, setCurrentTime] = useState('')
  const [lastTap, setLastTap] = useState(0)
  const [frameIndex, setFrameIndex] = useState(0)
  const [stars, setStars] = useState([])

  const bunnyFrames = useMemo(() => [
    '/images/bunny1.png',
    '/images/bunny2.png',
    '/images/bunny3.png',
    '/images/bunny4.png'
  ], [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options = {
        hour: '2-digit',
        minute: '2-digit'
      }
      setCurrentTime(now.toLocaleTimeString('en-US', options))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!bunnyFrames.length) return
    let currentFrame = 0
    const interval = setInterval(() => {
      currentFrame = (currentFrame + 1) % bunnyFrames.length
      setFrameIndex(currentFrame)
    }, 600)

    return () => clearInterval(interval)
  }, [bunnyFrames])

  useEffect(() => {
    const targetCount = 60
    const starsArr = []

    const isInExclusion = (topPct, leftPct) => {
      // Avoid the bunny/text region roughly centered
      const inCenter = topPct >= 35 && topPct <= 70 && leftPct >= 35 && leftPct <= 65
      // Avoid the lower text area
      const inBottomText = topPct >= 70 && topPct <= 90 && leftPct >= 30 && leftPct <= 70
      return inCenter || inBottomText
    }

    let attempts = 0
    while (starsArr.length < targetCount && attempts < targetCount * 6) {
      const top = 5 + Math.random() * 85
      const left = 5 + Math.random() * 90
      if (isInExclusion(top, left)) {
        attempts += 1
        continue
      }
      starsArr.push({
        id: starsArr.length,
        top,
        left,
        scale: 0.12 + Math.random() * 0.18,
        minOpacity: 0.15 + Math.random() * 0.25,
        maxOpacity: 0.7 + Math.random() * 0.25,
        delay: Math.random() * 2.5,
        duration: 2.5 + Math.random() * 2.5
      })
      attempts += 1
    }

    setStars(starsArr)
  }, [])

  const handleTap = () => {
    const now = Date.now()
    if (now - lastTap < 300) {
      onWake()
    }
    setLastTap(now)
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center font-quicksand relative cursor-pointer"
      onClick={handleTap}
    >
      {/* Background gradient and grid */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a1124] via-[#0a0f1c] to-[#040712]" />
      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <Image
            key={star.id}
            src="/images/star.png"
            alt="Star"
            width={64}
            height={64}
            className="absolute twinkle-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              transform: `translate(-50%, -50%) scale(${star.scale})`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              '--twinkle-min': `${star.minOpacity}`,
              '--twinkle-max': `${star.maxOpacity}`
            }}
            priority={star.id < 5}
          />
        ))}
      </div>

      {/* Bunny Animation */}
      <div className="flex flex-col items-center text-center z-10">
        <div className="w-32 h-32 mb-4 relative">
          <Image
            src={bunnyFrames[frameIndex]}
            alt="Sleeping bunny"
            fill
            sizes="192px"
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
        <p className="text-2xl font-semibold text-white animate-pulse drop-shadow">
          Double tap anywhere to wake up
        </p>
      </div>

      {/* Time */}
      <div className="absolute bottom-8 text-[#2B2B2B] text-[1.2rem] z-10">
        {currentTime}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: var(--twinkle-min, 0.3);
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.35));
          }
          50% {
            opacity: var(--twinkle-max, 1);
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8));
          }
        }
        .twinkle-star {
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          position: absolute;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
} 