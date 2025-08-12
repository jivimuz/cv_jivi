"use client";

import Image from "next/image";

export default function ProjectList() {
  const projectList = [
    {
      name: "Hospital Management System",
      description:
        "An integrated Hospital Management System designed to streamline patient care by connecting with BPJS and Satu Sehat. This system automates administrative tasks, optimizes medical records management, and enhances service efficiency, ensuring better healthcare experiences for patients and providers alike.",
      techstack: ["html", "jQuery", "PHP", "Code Igniter 4", "mysql"],
      imageUrl: "/assets/img/projects/pj-1.jpg",
    },
    {
      name: "MES (Manufacture Execution System)",
      description:
        "A web-based Manufacturing Execution System (MES) tailored for manufacturing companies to monitor, track, and control production in real-time. This system enhances productivity, reduces downtime, and provides comprehensive insights into every stage of the manufacturing process, supporting data-driven decisions and operational efficiency",
      techstack: ["html", "jQuery", "PHP", "Laravel 11", "mysql"],
      imageUrl: "/assets/img/projects/pj-2.jpg",
    },
    {
      name: "ERP (Enterprise Resource Planning) System",
      description:
        "A web-based ERP system for manufacturing companies designed to optimize operations, streamline production, and enhance real-time data access across departments. This solution supports inventory management, procurement, and workflow automation, providing a unified platform for improved efficiency and decision-making.",
      techstack: ["html", "jQuery", "PHP", "Code Igniter 3", "mysql"],
      imageUrl: "/assets/img/projects/pj-3.jpg",
    },
    {
      name: "Umrah & Hajj Jamaah Management System",
      description:
        "A web-based Umrah and Hajj Jamaah Management System built to simplify pilgrim registration, itinerary planning, and document handling. This platform enables efficient tracking and personalized service, ensuring an organized and smooth journey for each participant.",
      techstack: ["html", "jQuery", "PHP", "Laravel 11", "mysql"],
      imageUrl: "/assets/img/projects/pj-4.jpg",
    },
    {
      name: "Front-end for HRIS (Human Resource Information System)",
      description:
        "A mobile frontend for HRIS built with React Native, offering seamless access to HR functions such as attendance, leave requests, and employee profiles. This solution delivers a user-friendly, responsive experience, enabling efficient HR management on the go.",
      techstack: ["Javascript", "React Native", "API"],
      imageUrl: "/assets/img/projects/pj-5.jpg",
    },
    {
      name: "Financing Analysis System",
      description:
        "A web-based Cooperative Financing Analysis System designed to evaluate loan applications, track repayments, and assess financial health. This platform provides data-driven insights, helping cooperatives manage funds efficiently and support member financial growth.",
      techstack: ["HTML", "jQuery", "PHP", "VanilaPHP", "mysql"],
      imageUrl: "/assets/img/projects/pj-6.jpg",
    },
    {
      name: "Patient registration and hospital information App",
      description:
        "An application for patient registration and hospital information, designed to streamline the admission process and provide easy access to hospital services. This app allows users to book appointments, view medical records, and receive important updates, enhancing overall patient experience and communication with healthcare providers.",
      techstack: ["Javascript", "ReactNative", "API"],
      imageUrl: "/assets/img/projects/pj-7.jpg",
    },
    {
      name: "Movie Listing App",
      description:
        "A movie listing app built with ReactJS, integrating with an API to display and search films in real-time. This application provides users with details like ratings, genres, and summaries, delivering an engaging and dynamic movie-browsing experience.",
      techstack: ["Javascript", "ReactJS", "API"],
      imageUrl: "/assets/img/projects/pj-8.jpg",
    },
    {
      name: "Landing Pages",
      description:
        "Landing pages created using HTML and popular CMS platforms like WordPress, Joomla, and Wix, designed to capture leads and promote products or services effectively. These pages feature engaging layouts, responsive design, and optimized content to enhance user experience and drive conversions.",
      techstack: ["html", "CMS (Wordpress, Joomla & Wix)"],
      imageUrl: "/assets/img/projects/pj-9.jpg",
    },
    {
      name: "Python Modelling",
      description:
        "Python modeling for data analysis enables the extraction of insights from complex datasets using powerful libraries like Pandas, NumPy, and Matplotlib. This approach streamlines data manipulation, visualization, and statistical analysis, empowering businesses to make informed decisions based on accurate data interpretations.",
      techstack: ["Python", "Pandas", "NumPy", "Matplotlib"],
      imageUrl: "/assets/img/projects/pj-10.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 align-items-center justify-items-center">
      {projectList.map((id) => (
        <div
          key={id.name}
          className="project-card p-4 border rounded-lg shadow-md animate-on-scroll"
        >
          <img src={id.imageUrl} alt="Project" width={500} height={300} />

          <h2 className="text-lg font-bold mb-2">{id.name}</h2>
          <p className="text-sm mb-3">{id.description}</p>
          <div className="flex flex-wrap gap-2">
            {id.techstack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
