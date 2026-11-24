export default function Skills() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="section-container w-full max-w-[1200px] p-5 bg-transparent rounded-[20px] text-center relative overflow-hidden mt-8">
        <div className="main w-full p-8 bg-[rgba(101,101,142,0.85)] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
          <h2 className="text-[2.5rem] mb-8 text-[#f5f5f5] font-bold relative z-[1]">
            Skills
          </h2>
          <ul className="list-none p-0 m-0 relative z-[1]">
            <li className="p-6 rounded-[15px] mb-4 text-left relative overflow-hidden text-[#f5f5f5]">
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">Languages:</strong>{" "}
                Java, Python, SQL, JavaScript, TypeScript
              </p>
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">Backend:</strong>{" "}
                Spring Boot, REST APIs, Kafka, Apache Spark, Microservices
              </p>
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">Frontend:</strong>{" "}
                React, React Native, Expo, HTML/CSS
              </p>
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">Data:</strong>{" "}
                Oracle, Hive, MySQL, MongoDB, Neo4j
              </p>
              <p className="mb-6 text-xl">
                <strong className="text-[#d0def3] text-2xl">DevOps / Infrastructure:</strong>{" "}
                Docker, AWS (Lambda, S3), Git, Linux, Autosys, CI/CD
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}