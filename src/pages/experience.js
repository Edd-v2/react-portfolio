import React from 'react';

export default function Experience() {
  return (
    <div className=" mx-auto max-w-6xl p-5 py-8 md:py-20" id="experience">
      <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className=" mb-10" key={`experience${exp.company}`}>
            <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
              <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                <img
                  className="max-h-full max-w-full transform cursor-pointer rounded-md transition ease-in hover:scale-105"
                  src={
                    exp.img ||
                    'https://media.licdn.com/dms/image/v2/D4D0BAQFTsJBlPsPoqQ/company-logo_200_200/company-logo_200_200/0/1720760766393/orbytatech_logo?e=2147483647&v=beta&t=cANEdpJII0v7tNacsyQNP4zi3UO9qVsgVNlZ5imbzFE'
                  }
                  alt=""
                  onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
                />
              </div>

              <div className="flex-1 cursor-pointer">
                <div className="text-lg font-bold md:text-lg">{exp.company}</div>
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="text-md md:text-md font-semibold text-gray-600">
                    {exp.position}
                  </div>
                  <div className="font-semibold text-sm">{exp.date}</div>
                </div>
              </div>
            </div>

            <div className=" pl-4 tracking-wide text-sm text-gray-500">
              <ul className="list-disc">
                {exp.details.map((detail, index) => (
                  <li key={`exp-details${index + exp.company}`}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Go backend developer',
    company: 'Orbyta Tech',
    details: [
      'Architected a comprehensive and portable notification service capable of delivering Email, SMS, and push notifications to 10M+ users on both mobile apps and the web with the help of Java Spring Boot and Apache Kafka.',
      'Spearheaded implementation of data retrieval jobs from services like Morningstar, leveraging Thread Pools for async data handling; streamlined processes, reducing data retrieval time by 50% and achieving 99.9% job success rate.',
      'Utilized advanced monitoring and bug resolution tools such as Prometheus, Athena, Sumo Logic, and Datadog to ensure proactive monitoring and efficient bug resolution within the software ecosystem.',
      
    ],
    date: 'Nov 2024 - Present',
    img: 'https://media.licdn.com/dms/image/v2/D4D0BAQFTsJBlPsPoqQ/company-logo_200_200/company-logo_200_200/0/1720760766393/orbytatech_logo?e=2147483647&v=beta&t=cANEdpJII0v7tNacsyQNP4zi3UO9qVsgVNlZ5imbzFE',
    companyUrl: 'https://technologies.orbyta.it/',
  },
  {
    position: 'Junior  FullStack developer',
    company: 'Orbyta Tech',
    details: [
      'Architected a comprehensive and portable notification service capable of delivering Email, SMS, and push notifications to 10M+ users on both mobile apps and the web with the help of Java Spring Boot and Apache Kafka.',
      'Spearheaded implementation of data retrieval jobs from services like Morningstar, leveraging Thread Pools for async data handling; streamlined processes, reducing data retrieval time by 50% and achieving 99.9% job success rate.',
      'Utilized advanced monitoring and bug resolution tools such as Prometheus, Athena, Sumo Logic, and Datadog to ensure proactive monitoring and efficient bug resolution within the software ecosystem.',
      
    ],
    date: 'Jun 2024 - Nov 2024',
    img: 'https://media.licdn.com/dms/image/v2/D4D0BAQFTsJBlPsPoqQ/company-logo_200_200/company-logo_200_200/0/1720760766393/orbytatech_logo?e=2147483647&v=beta&t=cANEdpJII0v7tNacsyQNP4zi3UO9qVsgVNlZ5imbzFE',
    companyUrl: 'https://technologies.orbyta.it/',
  },
  {
    position: 'Junior  backend developer',
    company: 'Orbyta Tech',
    details: [
      'Architected a comprehensive and portable notification service capable of delivering Email, SMS, and push notifications to 10M+ users on both mobile apps and the web with the help of Java Spring Boot and Apache Kafka.',
      'Spearheaded implementation of data retrieval jobs from services like Morningstar, leveraging Thread Pools for async data handling; streamlined processes, reducing data retrieval time by 50% and achieving 99.9% job success rate.',
      'Utilized advanced monitoring and bug resolution tools such as Prometheus, Athena, Sumo Logic, and Datadog to ensure proactive monitoring and efficient bug resolution within the software ecosystem.',
      
    ],
    date: 'Jan 2024 - Jun 2024',
    img: 'https://media.licdn.com/dms/image/v2/D4D0BAQFTsJBlPsPoqQ/company-logo_200_200/company-logo_200_200/0/1720760766393/orbytatech_logo?e=2147483647&v=beta&t=cANEdpJII0v7tNacsyQNP4zi3UO9qVsgVNlZ5imbzFE',
    companyUrl: 'https://technologies.orbyta.it/',
  },
  
];
