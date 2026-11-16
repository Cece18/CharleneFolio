export default function Experience() {
  return (
    <div className="section-container experience-section p-5 ">
      <ul>
        <li className="bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              Software Engineer II - Citi Developer Portal
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              CitiGroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              July 2026 – Present · Mississauga, ON
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Enhanced client failure notifications by implementing context-specific error messaging, improving diagnostic information available to API consumers.
            </li>
          </ul>
        </li>

        <li className="experience-item bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              Software Engineer - Market Risk
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              CitiGroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              July 2025 – July 2026 · Mississauga, ON
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Modernized production market risk ingestion pipelines by migrating from legacy JDBC-based data extraction to REST API services, redesigning ingestion logic to process JSON payloads and load structured data into Oracle data stores.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Designed and implemented enhancements across the Business Hierarchy platform by extending domain models, database schemas, reporting logic, and downstream file generation used for enterprise hedge classification.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Enhanced enterprise batch processing pipelines by developing and maintaining Autosys scheduling workflows, production ingestion jobs, deployment activities, and operational monitoring for Olympus market risk systems.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Designed Python-based data quality validation pipelines with automated file validation, rejection, and cleanup logic to prevent corrupt data from propagating through downstream processing systems.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Supported production deployments, investigated operational issues, and collaborated across development and business teams to deliver reliable software releases and resolve production defects.
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