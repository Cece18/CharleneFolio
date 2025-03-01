'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Sleep({ onWake }) {
  const [currentTime, setCurrentTime] = useState('')
  const [lastTap, setLastTap] = useState(0)

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
      <div className="fixed inset-0 bg-gradient-to-b from-[#b2d7ff] to-[#d8b2ff]" />
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Battery Icon */}
      <div className="absolute top-4 right-4 z-10">
        <Image 
          src="/images/full-battery.png" 
          alt="Battery Icon" 
          width={30} 
          height={30} 
          className="opacity-80"
        />
      </div>

      {/* Sleep Message */}
      <div className="text-center z-10">
        <p className="text-2xl font-semibold text-black/70 animate-pulse mb-4">
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