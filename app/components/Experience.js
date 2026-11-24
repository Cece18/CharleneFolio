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
              Citigroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              July 2026 – Present · Mississauga, ON
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Built REST API integrations between internal certificate management services and external certificate authorities, enabling end-to-end request status synchronization and reducing certificate tracking inquiries by 35%
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Developed self-service certificate reissue workflows with automated eligibility checks, certificate request attribute updates, and dashboard status transitions, reducing manual support tickets by 40%
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Strengthened certificate platform security through real-time cache invalidation, pre-validation, and role-based access controls; enhanced multi-domain onboarding and upload verification, improving onboarding throughput by 25%
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Enhanced API failure notifications with context-specific error messaging, providing API consumers with clearer diagnostic information
            </li>
          </ul>
        </li>

        <li className="experience-item bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              Software Engineer - Market Risk
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              Citigroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              July 2025 – July 2026 · Mississauga, ON
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Modernized production market risk ingestion pipelines by migrating legacy JDBC-based data extraction to REST services, redesigning ingestion logic to process JSON payloads and load structured data into Oracle
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Extended enterprise risk data models, database schemas, reporting logic, and downstream file generation to support business classification and reporting requirements
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Developed Python-based data quality validation pipelines with automated file validation, rejection, and cleanup logic; maintained scheduled ingestion workflows and supported production deployments, monitoring, and incident resolution
            </li>
          </ul>
        </li>

        <li className="experience-item bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              Citigroup Software Engineer Intern - Equities
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              Citigroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              May 2024 – Aug. 2024 · Mississauga, ON
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Developed Java microservices using Kafka to process over 100,000 daily messages, improving system fault tolerance
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Reduced production message-processing failures by 30% through improved validation logic and resilient error handling
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Extended a Python testing framework to automate FIX protocol validation over TCP/IP across more than 10 trading venues
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Designed and implemented a resilient retry and reconnection mechanism, reducing message loss by 15% during peak traffic
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