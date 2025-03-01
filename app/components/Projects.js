export default function Projects() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="section-container w-full max-w-[1200px] p-5 bg-transparent rounded-[20px] text-center relative overflow-hidden">
          <ul className="list-none p-0 m-0 relative z-[1]">
            <li className="bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-6 rounded-[15px] mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
              <div className="mb-5">
                <h3 className="text-2xl font-bold mb-2">Music Originality and Inclusivity Platform</h3>
                <span className="inline-block text-[0.9rem] text-[#d0def3] font-bold px-2.5 py-1 bg-white/10 rounded-[15px]">
                  PyTorch, Cohere API, Python, Flask, Numpy, Next.js
                </span>
              </div>
              <div className="flex gap-5 items-start flex-col lg:flex-row">
                <div className="w-full lg:w-[300px] overflow-hidden rounded-[10px] border-2 border-white/10">
                  <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">
                    <img src="/images/Safetune.jpg" alt="Portfolio Preview" className="w-full h-auto block" />
                  </a>
                </div>
                <div className="flex-1">
                  <p className="text-base leading-[1.6]">
                    Developed a custom Dual-headed LSTM model in PyTorch for melody and lyric analysis, leveraging Cohere API endpoints for semantic analysis, text summarization, and song content evaluation.
                  </p>
                </div>
              </div>
            </li>

            <li className="bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-6 rounded-[15px] mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
              <div className="mb-5">
                <h3 className="text-2xl font-bold mb-2">Fraudulent Transaction Detection System</h3>
                <span className="inline-block text-[0.9rem] text-[#d0def3] font-bold px-2.5 py-1 bg-white/10 rounded-[15px]">
                  Python, Scikit-learn
                </span>
              </div>
              <div className="flex gap-5 items-start">
                <div className="flex-none w-[300px] overflow-hidden rounded-[10px] border-2 border-white/10">
                  <a href="https://github.com/yourusername/trading-system" target="_blank" rel="noopener noreferrer">
                    <img src="/images/Fraudimage.png" alt="Trading System Preview" className="w-full h-auto block" />
                  </a>
                </div>
                <div className="flex-1">
                  <p className="text-base leading-[1.6]">
                    Developed a fraud detection system using Scikit-learn's Random Forest Classifier to classify transactions as fraudulent or legitimate based on various features.
                  </p>
                </div>
              </div>
            </li>
          </ul>

      </div>
    </div>
  )
} 