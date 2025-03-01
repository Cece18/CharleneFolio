export default function Education() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="section-container w-full max-w-[1200px] p-3 sm:p-5 bg-transparent rounded-[20px] text-center relative overflow-hidden">
        <div className="main w-full p-4 sm:p-8 bg-[rgba(101,101,142,0.85)] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
          <h2 className="text-[2rem] sm:text-[2.5rem] mb-6 sm:mb-8 text-[#f5f5f5] font-bold relative z-[1]">
            Education
          </h2>
          <ul className="list-none p-0 m-0 relative z-[1]">
            <li className="p-6 rounded-[15px] mb-4 text-left relative overflow-hidden text-[#f5f5f5]">
              <h3 className="text-2xl font-bold mb-4">Hons Bachelor Degree Science - York University</h3>
              <p className="text-xl">
                Key Coursework: Intro to Database Systems, Machine Learning, Data structures & Algorithms, Operating Systems, Project Management
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 