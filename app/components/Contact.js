'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const subject = formData.get('subject')
    const message = formData.get('message')
    const mailto = `mailto:noyecharlene@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    window.location.href = mailto
    setStatus('Your email app should open with your message ready to send.')
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-[#b2d7ff] via-[#f2e8ff] to-[#ffd6e8] p-5 sm:p-8 text-[#2B2B2B]">
      <div className="mx-auto max-w-xl rounded-lg border border-white/80 bg-white/90 p-5 shadow-lg sm:p-7">
        <div className="mb-6">
          <p className="mb-1 text-sm font-semibold uppercase text-[#4A90E2]">Contact</p>
          <h1 className="text-2xl font-bold sm:text-3xl">Let&#39;s get in touch</h1>
          <p className="mt-2 text-sm text-[#2B2B2B]/75">Send a note to noyecharlene@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold">
              Message title
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              maxLength={150}
              placeholder="What would you like to discuss?"
              className="w-full rounded-md border border-[#b8c6dc] bg-white px-3 py-2.5 outline-none transition focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              maxLength={5000}
              placeholder="Write your message here..."
              className="w-full resize-y rounded-md border border-[#b8c6dc] bg-white px-3 py-2.5 outline-none transition focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#2B2B2B]/65">Your email app will open to send your message.</p>
            <button
              type="submit"
              className="rounded-md bg-[#4A90E2] px-5 py-2.5 font-semibold text-white shadow transition hover:bg-[#357ac6] focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
            >
              Send message
            </button>
          </div>
          <p role="status" aria-live="polite" className="min-h-5 text-sm text-[#357ac6]">
            {status}
          </p>
        </form>
      </div>
    </div>
  )
}