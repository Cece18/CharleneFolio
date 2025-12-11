'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

export default function Sleep({ onWake }) {
  const [currentTime, setCurrentTime] = useState('')
  const [lastTap, setLastTap] = useState(0)
  const [frameIndex, setFrameIndex] = useState(0)

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
      {/* Starry night overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <Image
          src="images/Stary.svg"
          alt="Starry night"
          fill
          className="object-cover"
          priority
        />
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
    </div>
  )
} 