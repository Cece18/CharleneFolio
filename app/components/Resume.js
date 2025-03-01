export default function Resume() {
  return (
    <div className="flex flex-col h-full">
      {/* Download Button Container */}
      <div className="flex justify-center mb-4 p-2">
        <a 
          href="/documents/Charlene_Noye.pdf" 
          download
          className="
            bg-[#5167b1] 
            text-white 
            px-6 
            py-2 
            rounded-full
            font-bold
            hover:bg-[#4557a0]
            transition-colors
            duration-200
            flex
            items-center
            gap-2
          "
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 bg-white rounded-lg overflow-hidden p-2 sm:p-0">
        <iframe
          src="/documents/Charlene_Noye.pdf"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  )
} 