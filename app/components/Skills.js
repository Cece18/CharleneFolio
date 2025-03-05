export default function Skills() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="section-container w-full max-w-[1200px] p-5 bg-transparent rounded-[20px] text-center relative overflow-hidden">
        <div className="main w-full p-8 bg-[rgba(101,101,142,0.85)] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
          <h2 className="text-[2.5rem] mb-8 text-[#f5f5f5] font-bold relative z-[1]">
            Skills
          </h2>
          <ul className="list-none p-0 m-0 relative z-[1]">
            <li className="p-6 rounded-[15px] mb-4 text-left relative overflow-hidden text-[#f5f5f5]">
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">Languages & Frameworks:</strong>{" "}
                Java, Python, HTML/CSS, JavaScript, SQL, C/C++ , Spring Boot, React, Node.js
              </p>
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">Database & Networking:</strong>{" "}
                MySQL, Postgres, NoSQL, Neo4j
              </p>
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">Tools & Platforms:</strong>{" "}
                Git, GitLab, Linux, shell scripting, AWS (Lambda, S3), Kafka, Docker
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 