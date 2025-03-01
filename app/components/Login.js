'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Login({ onLogin }) {
  const [currentTime, setCurrentTime] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-quicksand relative">
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

      {/* Login Container */}
      <div className="
        bg-white/90 
        p-10 
        rounded-lg 
        shadow-lg 
        border-2 
        border-[#5167b1] 
        w-[320px]
        text-center
        relative
        z-10
        animate-[fadeIn_0.8s_ease-out]
      ">
        <Image 
          src="/images/profile.png" 
          alt="Profile Picture" 
          width={120} 
          height={120}
          className="
            rounded-full 
            mx-auto 
            mb-6 
            border-3 
            border-[#5167b1] 
            p-[3px] 
            shadow-[0_0_20px_rgba(81,103,177,0.2)]
          "
        />
        <h2 className="text-[1.8rem] mb-6 font-semibold text-[#4A90E2]">
          Welcome
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Click here to enter username"
            className="
              p-4
              bg-white/90
              border-2
              border-[#5167b1]
              rounded-lg
              text-center
              text-base
              text-black
              transition-all
              duration-300
              focus:outline-none
              focus:border-[#8c74b5]
              focus:shadow-[0_0_10px_rgba(81,103,177,0.2)]
              placeholder:text-black/50
            "
          />
          <button
            type="submit"
            className="
              p-4
              bg-[#5167b1]
              text-white
              rounded-lg
              text-base
              font-semibold
              transition-all
              duration-300
              hover:bg-[#8c74b5]
              hover:-translate-y-0.5
              hover:shadow-[0_4px_10px_rgba(81,103,177,0.3)]
            "
          >
            Enter Portfolio
          </button>
        </form>
      </div>

      {/* Time */}
      <div className="absolute bottom-8 text-[#2B2B2B] text-[1.2rem] z-10">
        {currentTime}
      </div>
    </div>
  )
} 