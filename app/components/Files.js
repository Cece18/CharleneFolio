'use client'

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from 'react'

const NAV_ITEMS = [
  { id: 'desktop', label: 'Desktop', accent: '#4A90E2', icon: '/images/desktop.png' },
  { id: 'downloads', label: 'Downloads', accent: '#9B51E0', icon: '/images/downloads.png' },
  { id: 'documents', label: 'Documents', accent: '#F2994A', icon: '/images/documents.png' },
  { id: 'pictures', label: 'Pictures', accent: '#56CCF2', icon: '/images/pictures.png' }
]

const FILE_LIBRARY = {
  desktop: [
    {
      name: 'Skills.app',
      icon: '/images/Skills.png',
      accent: '#4A90E2',
      launchId: 'skills'
    },
    {
      name: 'Experience.app',
      icon: '/images/Experience.png',
      accent: '#9B51E0',
      launchId: 'experience'
    },
    {
      name: 'Education.app',
      icon: '/images/Education.png',
      accent: '#F2994A',
      launchId: 'education'
    },
    {
      name: 'Projects.app',
      icon: '/images/Projects.png',
      accent: '#56CCF2',
      launchId: 'projects'
    },
    {
      name: 'Resume.pdf',
      icon: '/images/Resume.png',
      accent: '#F2C94C',
      launchId: 'resume'
    },
    {
      name: 'Music Player.app',
      icon: '/images/Music.png',
      accent: '#FF9A8B',
      launchId: 'music'
    }
  ],
  downloads: [
    {
      name: 'Safetune Setup.dmg',
      detail: 'Installer',
      icon: '/images/Safetune.jpg',
      accent: '#FF9A8B'
    },
    {
      name: 'Latest Resume.pdf',
      detail: 'PDF document',
      icon: '/images/txt-file.png',
      accent: '#F2C94C'
    }
  ],
  documents: [
    {
      name: 'Important Notes.txt',
      icon: '/images/txt-file.png',
      accent: '#FF9A8B'
    }
  ],
  pictures: [
    {
      name: 'Igris.png',
      detail: 'PNG image',
      icon: '/images/Igris.png',
      accent: '#56CCF2',
      launchId: 'igris'
    }
  ]
}

export default function Files({ onOpenWindow = () => {} }) {
  const [selectedSection, setSelectedSection] = useState(NAV_ITEMS[0].id)
  const [noteOpen, setNoteOpen] = useState(false)
  const [noteContent, setNoteContent] = useState(`- Todo: update portfolio timeline\n- Research new backend patterns\n- Prep talking points for next meetup`)
  const [selectedFile, setSelectedFile] = useState(null)

  const activeLabel = useMemo(() => {
    const current = NAV_ITEMS.find((item) => item.id === selectedSection)
    return current ? current.label : 'Files'
  }, [selectedSection])

  const files = FILE_LIBRARY[selectedSection] ?? []

  const handleNavSelect = (sectionId) => {
    setSelectedSection(sectionId)
    setSelectedFile(null)
    if (sectionId !== 'desktop') {
      setNoteOpen(false)
    }
  }

  const handleFileClick = (file) => {
    setSelectedFile(file.name)
  }

  const handleFileOpen = (file) => {
    if (file.launchId) {
      onOpenWindow(file.launchId)
      return
    }
    if (file.name === 'Important Notes.txt' || file.name.trim() === 'Notes.txt') {
      setNoteOpen(true)
    }
  }

  return (
    <div className="flex h-full bg-gradient-to-br from-[#eef3ff] via-[#f6efff] to-[#eef3ff]">
      <aside className="w-56 border-r border-[#f4c8ff] border-opacity-60 bg-[#f8dcff] bg-opacity-80 backdrop-blur-md p-4 flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#2B2B2B]">Locations</h2>
          <p className="text-sm text-[#2B2B2B]/70">Browse your spaces</p>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavSelect(item.id)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-all duration-150 ${
                selectedSection === item.id
                  ? 'bg-white shadow-lg text-[#394b7d]'
                  : 'bg-white/10 hover:bg-white/30 text-[#2B2B2B]/80'
              }`}
            >
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                className="h-8 w-8 object-contain"
              />
              <span className="font-medium truncate">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-6 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 209, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 209, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#2B2B2B]">{activeLabel}</h1>
            <p className="text-sm text-[#2B2B2B]/70">Showing {files.length} items</p>
          </div>
          {/* <div className="flex items-center gap-3 bg-white/70 border border-white/50 rounded-xl px-4 py-2 shadow-sm">
            <span className="text-sm text-[#2B2B2B]/70">Quick Actions</span>
            <div className="flex gap-2">
              <button className="text-xs font-semibold text-white bg-[#4A90E2] px-3 py-1.5 rounded-lg shadow hover:bg-[#3a6fbd] transition-colors">New Folder</button>
              <button className="text-xs font-semibold text-[#394b7d] bg-white px-3 py-1.5 rounded-lg border border-[#d0d8f6] hover:bg-[#eef2ff] transition-colors">Upload</button>
            </div>
          </div> */}
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {files.map((file) => (
            <button
              key={file.name}
              type="button"
              onClick={() => handleFileClick(file)}
              onDoubleClick={() => handleFileOpen(file)}
              className={`flex flex-col items-center gap-2 text-center focus:outline-none transition-transform ${
                selectedFile === file.name ? 'bg-white/20 rounded-lg px-3 py-2 -m-2 shadow-[0_0_0_2px_rgba(148,163,209,0.4)] scale-[1.02]' : 'hover:bg-white/10 rounded-lg px-3 py-2 -m-2'
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center">
                <img src={file.icon} alt={file.name} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="font-semibold text-[#2B2B2B] truncate max-w-[160px]">{file.name}</p>
            </button>
          ))}
          {files.length === 0 && (
            <div className="relative z-10 col-span-full rounded-2xl border border-dashed border-[#9fa8d5] bg-white/50 p-10 text-center text-[#2B2B2B]/70">
              No items yet. Drag files here to get started.
            </div>
          )}
        </div>

        {noteOpen && (
          <div className="absolute bottom-6 right-6 w-full max-w-[480px] bg-white/95 border border-white/60 rounded-2xl shadow-2xl overflow-hidden z-20">
            <div className="flex items-center justify-between bg-[#4a5568] text-white px-5 py-3">
              <span className="font-semibold text-sm">Important Notes.txt</span>
              <button
                type="button"
                onClick={() => setNoteOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-md bg-white/20 hover:bg-white/30 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="p-5 bg-[#f5f7ff]">
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                className="w-full h-56 resize-none rounded-lg border border-[#cdd6ff] bg-white/85 p-3 text-sm text-[#2B2B2B] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#9aa9ff]"
                spellCheck={false}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
