export default function Experience() {
  return (
    <div className="section-container experience-section p-5 ">
      <ul>
        <li className="bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              Technology Analyst
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              CitiGroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              July 2025 – Present · Mississauga, ON
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Engineered a full-stack risk reporting platform using React and Spring Boot, streamlining global workflows for 50+ analysts and reducing report generation time.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Built and maintained Apache Airflow DAGs to automate multi-region ETL pipelines, improving data validation and scheduling reliability.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Optimized nightly batch processing with a partition-based truncation strategy, cutting deletion time by 85% and shrinking maintenance windows.
            </li>
          </ul>
        </li>

        <li className="experience-item bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              Software Engineer Intern
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              CitiGroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              May 2024 – August 2024 · Mississauga, ON
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Developed and deployed high-throughput Kafka microservices in Java to implement Drop Copy functionality, reducing message errors by 30% across 100,000+ daily trading messages.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Extended a Python testing framework with QuickFIX/J support, enabling automated FIX validation over TCP/IP for 10+ North American and European venues.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Designed a resilient TCP/IP retry mechanism for FIX session connectivity, decreasing message loss by 15% during peak traffic periods.
            </li>
          </ul>
        </li>

        <li className="experience-item bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              IT Support Specialist
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              Marymount International School
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              May 2022 – August 2022 · London, UK
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Designed and developed a Tuck Shop Management System with Spring Boot, PostgreSQL, and Hibernate to streamline inventory and reporting.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Utilized SQL and Spring Data JPA for complex querying and persistence, reducing query time by optimizing database relationships.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Collaborated with the IT team to scale administrative software, ensuring long-term reliability and performance.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}