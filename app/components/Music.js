'use client'

import { useState, useEffect, useRef } from 'react'

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null)
  const [playlist, setPlaylist] = useState([])
  const [volume, setVolume] = useState(50)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  // Parse filename to extract artist and title
  const parseFilename = (filename) => {
    // Remove .mp3 extension
    const name = filename.replace('.mp3', '')
    
    // Try to split by " - " (common format: "Artist - Title")
    if (name.includes(' - ')) {
      const parts = name.split(' - ')
      return {
        artist: parts[0].trim(),
        title: parts.slice(1).join(' - ').trim()
      }
    }
    
    // If no " - " found, use the whole name as title
    return {
      artist: 'Unknown Artist',
      title: name
    }
  }

  // Initialize playlist with actual MP3 files
  useEffect(() => {
    const songs = [
      'bôa - Duvet.mp3',
      'Instupendo - Comfort Chain.mp3',
      'liana flores - Nightvisions (official music video).mp3',
      'Men I Trust - Show Me How.mp3'
    ]

    const formattedPlaylist = songs.map((filename, index) => {
      const { artist, title } = parseFilename(filename)
      return {
        id: index,
        title: title,
        artist: artist,
        filename: filename,
        url: `/Songs/${filename}`
      }
    })

    setPlaylist(formattedPlaylist)
    // Don't auto-select first track - let user choose
  }, [])

  const currentTrack = currentTrackIndex !== null && playlist[currentTrackIndex] ? playlist[currentTrackIndex] : null

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      handleNext()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrackIndex])

  // Load new track before attempting to play
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return

    audio.src = currentTrack.url
    audio.load()
    setCurrentTime(0)
    if (isPlaying) {
      audio.play().catch(err => console.error('Play error:', err))
    }
  }, [currentTrackIndex])

  // Play/pause control
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(err => console.error('Play error:', err))
    } else {
      audio.pause()
    }
  }, [isPlaying, currentTrackIndex])

  // Volume control
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume / 100
  }, [volume])

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    if (currentTrackIndex === null) return
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
  }

  const handlePrevious = () => {
    if (currentTrackIndex === null) return
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }

  const handleTrackSelect = (index) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  const handleProgressChange = (e) => {
    const audio = audioRef.current
    if (!audio) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    const newTime = percentage * duration
    
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  return (
    <div className="min-h-full w-full bg-gradient-to-br from-[#b2d7ff] via-[#d8b2ff] to-[#b2d7ff] p-3 sm:p-5 text-sm sm:text-base">
      <div className="max-w-7xl mx-auto min-h-full flex flex-col">
        {/* Hidden audio element */}
        <audio ref={audioRef} preload="metadata" />

        {/* Header */}
        <div className="mb-4 sm:mb-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2B2B2B] mb-1.5">Music Player</h1>
          <p className="text-[#2B2B2B]/80 text-sm sm:text-base">Your music, your way</p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
          {/* Now Playing Section */}
          <div className="lg:col-span-2 flex flex-col min-h-0">
            <div className="bg-[rgba(101,101,142,0.85)] border-2 border-white/10 rounded-2xl p-4 sm:p-5 flex-1 flex flex-col min-h-0 overflow-y-auto">
              <h2 className="text-lg sm:text-xl font-bold text-[#f5f5f5] mb-3">Now Playing</h2>
              
              {currentTrack ? (
                <div className="flex flex-col items-center space-y-4">
                  {/* Vinyl Record */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[hsl(240,10%,12%)] to-[hsl(240,10%,22%)] shadow-2xl"
                      style={{
                        animation: isPlaying ? 'vinyl-spin 10s linear infinite' : 'none',
                        boxShadow: isPlaying
                          ? '0 0 60px hsl(330 70% 65% / 0.4), inset 0 0 30px hsl(0 0% 0% / 0.5)'
                          : '0 25px 50px -12px hsl(0 0% 0% / 0.4), inset 0 0 30px hsl(0 0% 0% / 0.5)'
                      }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`groove-${i}`}
                          className="absolute rounded-full border border-[hsl(240,5%,25%)]"
                          style={{
                            top: `${12 + i * 5}%`,
                            left: `${12 + i * 5}%`,
                            right: `${12 + i * 5}%`,
                            bottom: `${12 + i * 5}%`
                          }}
                        />
                      ))}

                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[hsl(240,10%,8%)]"
                        style={{
                          background: currentTrack?.albumArt
                            ? `url(${currentTrack.albumArt}) center/cover`
                            : 'linear-gradient(135deg, hsl(330 70% 75%) 0%, hsl(210 70% 80%) 100%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[hsl(240,10%,8%)]" />
                      </div>

                      <div
                        className="absolute inset-0 rounded-full opacity-30"
                        style={{
                          background: 'linear-gradient(135deg, transparent 40%, hsl(0 0% 100% / 0.1) 50%, transparent 60%)'
                        }}
                      />
                    </div>

                    {isPlaying && (
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle, hsl(330 70% 65% / 0.15) 0%, transparent 70%)',
                          animation: 'pulse-glow 2.6s ease-in-out infinite'
                        }}
                      />
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-[#f5f5f5] mb-1">{currentTrack.title}</h3>
                    <p className="text-base sm:text-lg text-[#d0def3]">{currentTrack.artist}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full max-w-md">
                    <div className="flex justify-between text-xs sm:text-sm text-[#d0def3] mb-1.5">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <div 
                      className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
                      onClick={handleProgressChange}
                    >
                      <div 
                        className="h-full bg-[#b2d7ff] rounded-full transition-all"
                        style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                      />
                      {/* Progress handle */}
                      <div 
                        className="absolute top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 bg-[#b2d7ff] rounded-full shadow-lg"
                        style={{ left: `calc(${duration ? (currentTime / duration) * 100 : 0}% - 7px)` }}
                      />
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <button 
                      onClick={handlePrevious}
                      disabled={currentTrackIndex === null}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#f5f5f5] hover:text-[#b2d7ff] transition-colors hover:scale-110 bg-white/10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous song"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l2.445 2.327A1 1 0 0014 12V8a1 1 0 00-1.555-.832L10 9.202V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                      </svg>
                    </button>
                    <button 
                      onClick={handlePlayPause}
                      disabled={currentTrackIndex === null}
                      className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#b2d7ff] text-[#2B2B2B] rounded-full hover:scale-110 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={currentTrackIndex === null}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#f5f5f5] hover:text-[#b2d7ff] transition-colors hover:scale-110 bg-white/10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next song"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                      </svg>
                    </button>
                    
                    {/* Volume Control with Icon */}
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
                      <svg className="w-5 h-5 text-[#f5f5f5]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-20 sm:w-24 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#b2d7ff] [&::-webkit-slider-thumb]:cursor-pointer"
                      />
                      <span className="text-[#d0def3] text-sm w-8">{volume}%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-24 h-24 text-[#b2d7ff]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f5f5f5]">Select a song to get started</h3>
                  <p className="text-lg text-[#d0def3]">Choose a track from the playlist to begin playing music</p>
                </div>
              )}
            </div>
          </div>

          {/* Playlist Section */}
          <div className="lg:col-span-1 flex flex-col min-h-0">
            <div className="bg-[rgba(101,101,142,0.85)] border-2 border-white/10 rounded-2xl p-6 flex-1 overflow-hidden flex flex-col min-h-0">
              <h2 className="text-lg sm:text-xl font-bold text-[#f5f5f5] mb-3">Playlist</h2>
              <div className="flex-1 overflow-y-auto space-y-3 px-1 pt-3 flex flex-col items-center">
                {playlist.map((track, index) => (
                  <button
                    key={track.id}
                    onClick={() => handleTrackSelect(index)}
                    className={`w-[88%] max-w-[380px] p-3.5 rounded-xl text-left transition-all ${
                      currentTrackIndex === index
                        ? 'bg-white/20 shadow-lg scale-105 border-2 border-[#b2d7ff]/50'
                        : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#b2d7ff]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#b2d7ff]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[#f5f5f5] text-sm sm:text-base font-semibold truncate">{track.title}</h4>
                        <p className="text-[#d0def3] text-xs sm:text-sm truncate">{track.artist}</p>
                      </div>
                      {currentTrackIndex === index && isPlaying && (
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-[#b2d7ff] rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes vinyl-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0% { opacity: 0.25; transform: scale(0.98); }
          50% { opacity: 0.5; transform: scale(1.03); }
          100% { opacity: 0.25; transform: scale(0.98); }
        }
      `}</style>
    </div>
  )
}
