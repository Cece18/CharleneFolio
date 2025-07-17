export default function Experience() {
  return (
    <div className="section-container experience-section p-5 overflow-y-auto scrollbar-hide">
      <ul>
        <li className="bg-[rgba(101,101,142,0.85)] border-2 border-white/10 p-4 sm:p-6 rounded-2xl mb-5 text-left relative overflow-hidden text-[#f5f5f5]">
          <div className="mb-4">
            <h3 className="text-[1.2rem] sm:text-[1.4rem] m-0 mb-1 text-[#f5f5f5] font-bold">
              Software Engineer Intern
            </h3>
            <span className="block text-[1rem] sm:text-[1.1rem] font-bold text-[#d0def3] mb-1">
              CitiGroup
            </span>
            <span className="block text-[0.9rem] text-[#d0def3] font-bold italic">
              May 2024 - August 2024
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Enhanced an existing testing framework by adding support for QuickFIX using Python, enabling message sending over TCP/IP for over 10+ venues across North America and Europe.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Developed and deployed Kafka microservices in Java to implement Drop Copy functionality, reducing message processing errors by 30% during daily trading of over 100,000 messages.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Developed TCP/IP retry mechanisms for FIX message processing, reducing message loss by 15% during peak network traffic.
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
              May 2022 - August 2022
            </span>
          </div>
          <ul className="list-none pl-0">
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Designed and developed a Tuck Shop Management System, using Spring Boot, PostgreSQL, and Hibernate, to streamline inventory tracking, sales management, and reporting.
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Utilized SQL and Spring Data JPA for complex querying and data persistence, reducing query time by optimizing database relationships
            </li>
            <li className="relative pl-5 mb-2 leading-6 text-base">
              <span className="absolute left-0 text-[#b8c6db]">•</span>
              Collaborated with the school&#39;s IT team to enhance and scale administrative software, ensuring long-term reliability and performance.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}