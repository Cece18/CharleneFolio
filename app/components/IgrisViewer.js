'use client'

/* eslint-disable @next/next/no-img-element */

export default function IgrisViewer() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#1f1f2e] via-[#2a2a3f] to-[#1f1f2e] flex justify-center p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 p-4">
        <img
          src="/images/Igris.png"
          alt="Igris illustration"
          className="mx-auto max-h-[60vh] w-auto max-w-full object-contain rounded-xl"
        />
      </div>
    </div>
  )
}
