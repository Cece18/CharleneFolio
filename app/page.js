'use client'

import { useState, useEffect, useRef } from 'react'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Login from './components/Login'
import Sleep from './components/Sleep'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')
  const [activeWindow, setActiveWindow] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [highlightedIcon, setHighlightedIcon] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSleeping, setIsSleeping] = useState(false)
  const [isWakingUp, setIsWakingUp] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }
      setCurrentTime(now.toLocaleString('en-US', options))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const desktopIcons = [
    { id: 'skills', title: 'Skills', icon: '/images/Skills.png' },
    { id: 'experience', title: 'Experience', icon: '/images/Experience.png' },
    { id: 'education', title: 'Education', icon: '/images/Education.png' },
    { id: 'projects', title: 'Projects', icon: '/images/Projects.png' },
    { id: 'resume', title: 'Resume', icon: '/images/Resume.png' },
  ]

  const handleIconDoubleClick = (iconId) => {
    setActiveWindow(iconId)
  }

  const handleShutdown = () => {
    setMenuOpen(false)
    setIsLoggedIn(false)
  }

  const handleSleep = () => {
    setMenuOpen(false)
    setIsSleeping(true)
  }

  const handleWake = () => {
    setIsWakingUp(true)
    setTimeout(() => {
      setIsSleeping(false)
      setIsWakingUp(false)
    }, 1000)
  }

  const handleDesktopClick = (e) => {
    if (e.target.classList.contains('desktop-container')) {
      setHighlightedIcon(null)
    }
  }

  const handleIconClick = (iconId) => {
    setHighlightedIcon(iconId)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : isSleeping ? (
        <Sleep onWake={handleWake} />
      ) : (
        <div className={`
          min-h-screen relative overflow-hidden font-quicksand
          transition-opacity duration-1000
          ${isWakingUp ? 'opacity-0' : 'opacity-100'}
          bg-gradient-to-b from-[#b2d7ff] to-[#d8b2ff] text-[#2B2B2B]
        `}>
          {/* Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Top Bar */}
          <header className="fixed top-0 left-0 right-0 h-10 bg-[rgba(240,237,242,0.9)] flex justify-between items-center px-5 shadow-md z-10">
            <div className="flex items-center gap-4">
              <span>Charlene</span>
              <div className="hidden sm:flex items-center gap-4">
                <a href="https://github.com/Cece18" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-[#ff69b4] transition-colors">
                  Github
                </a>
                <a href="https://www.linkedin.com/in/charlene-noye-a48b24265/" target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#ff69b4] transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:noyecharlene@gmail.com" 
                  className="hover:text-[#ff69b4] transition-colors">
                  Email Me
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="hidden sm:inline">{currentTime}</span>
              <span className="sm:hidden">
                {new Date().toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })}
              </span>
              <img src="/images/full-battery.png" alt="Battery Icon" className="w-5 h-5 hidden sm:block" />
            </div>
          </header>

          {/* About Me Widget */}
          <div className="
            absolute top-[60px] right-5 w-[450px] bg-white/90 rounded-lg shadow-lg p-4 z-5
            hidden lg:block
          ">
            <h2 className="text-3xl mb-2.5 text-[#4A90E2] font-extrabold">Hi, I'm Charlene</h2>
            <h3 className="text-xl font-bold">Full Stack Developer</h3>
            <p className="text-base leading-relaxed mb-2.5">
              I'm a software engineer from London, UK, passionate about backend development 
              and building high-impact projects.
            </p>
            <p className="text-base leading-relaxed mb-2.5">
              I enjoy solving challenging problems, learning new technologies, and sharing 
              knowledge with others.
            </p>
          </div>

          {/* Add the desktop-container class and click handler */}
          <div 
            className="desktop-container absolute inset-0"
            onClick={handleDesktopClick}
          >
            {/* Desktop Icons */}
            <div className="absolute top-[60px] left-4 grid grid-cols-1 sm:grid-cols-2 gap-5 z-1">
              {desktopIcons.map((icon) => (
                <div 
                  key={icon.id} 
                  className={`
                    text-center cursor-pointer
                    ${highlightedIcon === icon.id ? 'bg-[rgba(94,106,119,0.2)] shadow-[0_0_0_2px_rgba(94,106,119,0.4)] rounded-lg p-1.5 -m-1.5' : ''}
                  `}
                  onClick={() => handleIconClick(icon.id)}
                  onDoubleClick={() => handleIconDoubleClick(icon.id)}
                >
                  <img 
                    src={icon.icon}
                    alt={icon.title}
                    className={`
                      w-20 h-20 rounded-lg p-2.5 transition-transform
                      ${highlightedIcon === icon.id ? 'scale-110' : 'hover:scale-110'}
                    `}
                  />
                  <p className="mt-2.5 text-sm font-bold">{icon.title}</p>
                </div>
              ))}
            </div>

            {/* Window */}
            {activeWindow && (
              <div className={`
                fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-[95vw] sm:w-[85vw] lg:w-[66vw]
                h-[80vh] sm:h-[75vh] lg:h-[66vh]
                bg-[rgba(240,237,242,0.9)]
                rounded-xl
                outline outline-4 outline-[#5167b1] outline-offset-[-4px]
                z-30
                overflow-hidden
                flex flex-col
              `}>
                <div className="flex items-center justify-between p-3 bg-[#5167b1] text-white">
                  <div className="flex items-center gap-2">
                    <img 
                      src={desktopIcons.find(icon => icon.id === activeWindow)?.icon}
                      alt={desktopIcons.find(icon => icon.id === activeWindow)?.title}
                      className="w-6 h-6" 
                    />
                    <span className="text-xl font-bold tracking-wide">
                      {desktopIcons.find(icon => icon.id === activeWindow)?.title}
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveWindow(null)}
                    className="
                      w-[50px] 
                      h-[30px] 
                      rounded-full 
                      bg-[#e7f2f9] 
                      cursor-pointer 
                      text-center 
                      leading-[28px]
                      text-[1.2em]
                      font-['MyFont2', quicksand]
                      text-black
                      hover:bg-[#d1e5f5]
                      transition-colors
                      duration-200
                    "
                  >
                    ✕
                  </button>
                </div>
                <div className="flex-1 p-5 overflow-y-auto">
                  {activeWindow === 'experience' ? (
                    <Experience />
                  ) : activeWindow === 'skills' ? (
                    <Skills />
                  ) : activeWindow === 'education' ? (
                    <Education />
                  ) : activeWindow === 'projects' ? (
                    <Projects />
                  ) : activeWindow === 'resume' ? (
                    <Resume />
                  ) : (
                    <h2>Content for {activeWindow}</h2>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <footer className="fixed bottom-0 left-0 right-0 h-[50px] bg-[#d4e1f5] flex items-center px-5">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 mr-2.5 cursor-pointer"
            >
              <img src="/images/power.png" alt="Home Icon" className="w-[69%] h-[69%] mt-1.5" />
            </button>
            
            {menuOpen && (
              <div className="absolute bottom-[60px] left-2.5 bg-[#2d2d2d] border border-[#444] 
                rounded shadow-md">
                <ul className="p-2.5">
                  <li className="px-4 py-2 cursor-pointer text-white hover:bg-[#ff69b4]"
                    onClick={handleShutdown}>
                    Shut Down
                  </li>
                  <li className="px-4 py-2 cursor-pointer text-white hover:bg-[#ff69b4]"
                    onClick={handleSleep}>
                    Sleep
                  </li>
                </ul>
              </div>
            )}
          </footer>
        </div>
      )}
    </>
  )
}
