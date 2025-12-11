'use client'

/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useRef } from 'react'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Login from './components/Login'
import Sleep from './components/Sleep'
import Music from './components/Music'
import Files from './components/Files'
import IgrisViewer from './components/IgrisViewer'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')
  const [activeWindow, setActiveWindow] = useState(null)
  const [openWindows, setOpenWindows] = useState([])
  const [minimizedWindows, setMinimizedWindows] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [highlightedIcon, setHighlightedIcon] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSleeping, setIsSleeping] = useState(false)
  const [isWakingUp, setIsWakingUp] = useState(false)
  const [windowPositions, setWindowPositions] = useState({})
  const windowRefs = useRef({})
  const draggingIdRef = useRef(null)
  const dragOffsetRef = useRef({ x: 0, y: 0 })
  const liveWindowPositionsRef = useRef({})

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
    { id: 'skills', title: 'Skills', icon: '/images/Skills.png', showOnDesktop: true },
    { id: 'experience', title: 'Experience', icon: '/images/Experience.png', showOnDesktop: true },
    { id: 'education', title: 'Education', icon: '/images/Education.png', showOnDesktop: true },
    { id: 'projects', title: 'Projects', icon: '/images/Projects.png', showOnDesktop: true },
    { id: 'resume', title: 'Resume', icon: '/images/Resume.png', showOnDesktop: true },
    { id: 'files', title: 'Files', icon: '/images/Files.png', showOnDesktop: true },
    { id: 'music', title: 'Music', icon: '/images/Music.png', showOnDesktop: true },
    { id: 'igris', title: 'Igris.png', icon: '/images/Igris.png', showOnDesktop: false }
  ]

  const focusWindow = (iconId) => {
    setOpenWindows((prev) => {
      const withoutTarget = prev.filter((id) => id !== iconId)
      return [...withoutTarget, iconId]
    })
    setMinimizedWindows((prev) => prev.filter((id) => id !== iconId))
    setActiveWindow(iconId)
  }

  const handleIconDoubleClick = (iconId) => {
    focusWindow(iconId)
  }

  const handleWindowClose = (iconId) => {
    setOpenWindows((prev) => {
      const remaining = prev.filter((id) => id !== iconId)
      setMinimizedWindows((prevMin) => {
        const updatedMin = prevMin.filter((id) => id !== iconId)
        setActiveWindow((current) => {
          if (current === iconId) {
            const nextActive = [...remaining]
              .reverse()
              .find((id) => !updatedMin.includes(id))
            return nextActive ?? null
          }
          return current
        })
        return updatedMin
      })
      return remaining
    })
  }

  const handleTaskbarIconClick = (iconId) => {
    const isOpen = openWindows.includes(iconId)
    const isMinimized = minimizedWindows.includes(iconId)

    if (!isOpen || isMinimized) {
      focusWindow(iconId)
      return
    }

    if (activeWindow === iconId) {
      setMinimizedWindows((prev) => {
        if (prev.includes(iconId)) return prev
        const updated = [...prev, iconId]
        setActiveWindow(() => {
          const fallback = [...openWindows]
            .filter((id) => id !== iconId && !updated.includes(id))
          return fallback.length ? fallback[fallback.length - 1] : null
        })
        return updated
      })
      return
    }

    focusWindow(iconId)
  }

  const handleShutdown = () => {
    setMenuOpen(false)
    setIsLoggedIn(false)
    setActiveWindow(null)
    setOpenWindows([])
    setHighlightedIcon(null)
    setMinimizedWindows([])
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

  const handleWindowMouseDown = (e, iconId) => {
    if (e.target.closest('button')) return // Don't drag if clicking buttons
    focusWindow(iconId)

    const windowElement = windowRefs.current[iconId]
    if (!windowElement) return

    const rect = windowElement.getBoundingClientRect()
    draggingIdRef.current = iconId
    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
    document.body.style.userSelect = 'none'
  }

  const handleWindowContainerMouseDown = (e, iconId) => {
    if (e.button !== 0) return
    focusWindow(iconId)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    let animationFrameId = null

    const handleMouseMove = (e) => {
      const draggingId = draggingIdRef.current
      if (!draggingId) return

      const windowElement = windowRefs.current[draggingId]
      if (!windowElement) return

      const { x: offsetX, y: offsetY } = dragOffsetRef.current
      const headerHeight = 40
      const footerHeight = 50
      const rect = windowElement.getBoundingClientRect()
      const windowWidth = rect.width
      const windowHeight = rect.height

      const maxX = Math.max(0, window.innerWidth - windowWidth)
      const maxY = Math.max(headerHeight, window.innerHeight - footerHeight - windowHeight)

      const targetX = Math.max(0, Math.min(maxX, e.clientX - offsetX))
      const targetY = Math.max(headerHeight, Math.min(maxY, e.clientY - offsetY))

      if (animationFrameId) return

      animationFrameId = requestAnimationFrame(() => {
        windowElement.style.left = `${targetX}px`
        windowElement.style.top = `${targetY}px`
        liveWindowPositionsRef.current[draggingId] = { x: targetX, y: targetY }
        animationFrameId = null
      })
    }

    const handleMouseUp = () => {
      const draggingId = draggingIdRef.current
      if (!draggingId) return

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
      }

      const windowElement = windowRefs.current[draggingId]
      if (windowElement) {
        const rect = windowElement.getBoundingClientRect()
        liveWindowPositionsRef.current[draggingId] = { x: rect.left, y: rect.top }
        setWindowPositions((prev) => ({
          ...prev,
          [draggingId]: { x: rect.left, y: rect.top }
        }))
      }

      draggingIdRef.current = null
      dragOffsetRef.current = { x: 0, y: 0 }
      document.body.style.userSelect = ''
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.style.userSelect = ''
      draggingIdRef.current = null
      dragOffsetRef.current = { x: 0, y: 0 }
    }
  }, [])

  const getWindowPosition = (iconId, index) => {
    if (liveWindowPositionsRef.current[iconId]) {
      return liveWindowPositionsRef.current[iconId]
    }
    if (windowPositions[iconId]) {
      return windowPositions[iconId]
    }
    // Default centered position with slight offset for multiple windows
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const defaultWidth = iconId === 'music' ? 1200 : iconId === 'files' ? 1100 : iconId === 'igris' ? 800 : 1000
    return {
      x: Math.max(0, (windowWidth / 2) - (defaultWidth / 2) + (index * 30)),
      y: 100 + (index * 30)
    }
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
              <img src="/images/wifi.png" alt="WiFi Icon" className="w-5 h-5" />
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
            <h2 className="text-3xl mb-2.5 text-[#4A90E2] font-extrabold">Hi, I&#39;m Charlene</h2>
            <h3 className="text-xl font-bold">Full Stack Developer</h3>
            <p className="text-base leading-relaxed mb-2.5">
              I&#39;m a software engineer from London, UK, passionate about backend development 
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
              {desktopIcons
                .filter((icon) => icon.showOnDesktop !== false)
                .map((icon) => (
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

            {/* Windows */}
            {openWindows.map((iconId, index) => {
                const iconMeta = desktopIcons.find((icon) => icon.id === iconId)
                if (!iconMeta) return null
                const isActive = activeWindow === iconId
                const isMinimized = minimizedWindows.includes(iconId)
                const position = getWindowPosition(iconId, index)
                return (
                  <div
                    key={`window-${iconId}`}
                    data-window-id={iconId}
                    ref={(el) => {
                      if (el) {
                        windowRefs.current[iconId] = el
                      } else {
                        delete windowRefs.current[iconId]
                      }
                    }}
                    className={`
                      fixed
                      w-[95vw] sm:w-[85vw] ${iconId === 'music' ? 'lg:w-[1200px]' : iconId === 'files' ? 'lg:w-[1100px]' : 'lg:w-[1000px]'}
                      h-[75vh] sm:h-[70vh] lg:h-[600px]
                      bg-white
                      rounded-xl
                      overflow-hidden flex flex-col transition-all
                      outline-none border-0
                      ${isActive ? 'z-40 shadow-2xl' : 'z-30 shadow-lg opacity-90'}
                    `}
                    style={{ 
                      left: `${position.x}px`, 
                      top: `${position.y}px`,
                      transform: 'none',
                      visibility: isMinimized ? 'hidden' : 'visible',
                      pointerEvents: isMinimized ? 'none' : 'auto'
                    }}
                    onMouseDown={(e) => handleWindowContainerMouseDown(e, iconId)}
                  >
                    {/* Title Bar */}
                    <div 
                      className={`
                        flex items-center justify-between h-14 px-3
                        ${isActive ? 'bg-[#4a5568]' : 'bg-[#718096]'}
                        text-white select-none
                      `}
                      onMouseDown={(e) => handleWindowMouseDown(e, iconId)}
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <img 
                          src={iconMeta.icon}
                          alt={iconMeta.title}
                          className="w-10 h-10 flex-shrink-0" 
                        />
                        <span className="text-lg font-semibold truncate">
                          {iconMeta.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setMinimizedWindows((prev) => {
                              if (prev.includes(iconId)) return prev
                              const updated = [...prev, iconId]
                              setActiveWindow((current) => {
                                if (current === iconId) {
                                  const fallback = [...openWindows]
                                    .filter((id) => id !== iconId && !updated.includes(id))
                                  return fallback.length ? fallback[fallback.length - 1] : null
                                }
                                return current
                              })
                              return updated
                            })
                          }}
                          className="
                            w-6 h-6 flex items-center justify-center
                            bg-white/20 hover:bg-white/30
                            text-white text-xs font-bold
                            transition-colors duration-150
                            border border-white/30 rounded-md
                          "
                          aria-label="Minimize window"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          &minus;
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleWindowClose(iconId)
                          }}
                          className="
                            w-6 h-6 flex items-center justify-center
                            bg-red-500/80 hover:bg-red-600
                            text-white text-xs font-bold
                            transition-colors duration-150
                            border border-red-600 rounded-md
                          "
                          aria-label="Close window"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                    
                    {/* Window Content */}
                    <div className={`flex-1 overflow-y-auto ${iconId === 'music' || iconId === 'files' ? 'p-0' : 'p-5 bg-white border-t border-gray-200'}`}>
                      {iconId === 'experience' ? (
                        <Experience />
                      ) : iconId === 'skills' ? (
                        <Skills />
                      ) : iconId === 'education' ? (
                        <Education />
                      ) : iconId === 'projects' ? (
                        <Projects />
                      ) : iconId === 'resume' ? (
                        <Resume />
                      ) : iconId === 'files' ? (
                        <Files onOpenWindow={focusWindow} />
                      ) : iconId === 'music' ? (
                        <Music />
                      ) : iconId === 'igris' ? (
                        <IgrisViewer />
                      ) : (
                        <h2>Content for {iconId}</h2>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>

          {/* Bottom Bar */}
          <footer className="fixed bottom-0 left-0 right-0 h-[50px] bg-[#d4e1f5] flex items-center px-5 gap-4">
            <div className="relative">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 cursor-pointer"
              >
                <img src="/images/power.png" alt="Home Icon" className="w-[69%] h-[69%] mt-1.5" />
              </button>
              {menuOpen && (
                <div className="absolute bottom-[60px] left-1 bg-[#2d2d2d] border border-[#444] rounded shadow-md">
                  <ul className="p-2.5 min-w-[140px]">
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
            </div>

            <div className="flex-1 flex items-center gap-2 overflow-x-auto">
              {openWindows.map((iconId) => {
                const iconMeta = desktopIcons.find((icon) => icon.id === iconId)
                if (!iconMeta) return null
                const isActive = activeWindow === iconId
                const isMinimized = minimizedWindows.includes(iconId)
                return (
                  <button
                    key={`taskbar-${iconId}`}
                    onClick={() => handleTaskbarIconClick(iconId)}
                    className={`
                      flex items-center gap-2 px-3 h-9 min-w-[120px]
                      rounded-md border transition-all
                      ${isActive ? 'bg-white border-[#5167b1] shadow-md scale-[1.01]' : 'bg-white/70 border-transparent hover:bg-white/90'}
                      ${isMinimized && !isActive ? 'opacity-60' : 'opacity-100'}
                    `}
                  >
                    <img src={iconMeta.icon} alt={`${iconMeta.title} icon`} className="w-5 h-5 flex-shrink-0" />
                    <span className={`text-xs font-semibold tracking-wide truncate ${isActive ? 'text-[#2B2B2B]' : 'text-[#394b7d]'}`}>
                      {iconMeta.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </footer>
        </div>
      )}
    </>
  )
}
