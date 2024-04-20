import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "ABC Company",
      role: "Full Stack Developer",
      duration: "January 2019 - Present",
      projects: [
        {
          name: "Project 1",
          description:
            "Developed a web application using React and Node.js for managing inventory.",
          technologies: ["React", "Node.js", "MongoDB"],
          contributions:
            "Led the frontend development team and implemented responsive design.",
        },
        {
          name: "Project 2",
          description:
            "Built a RESTful API using Java Spring Boot for a customer management system.",
          technologies: ["Java", "Spring Boot", "MySQL"],
          contributions:
            "Designed and implemented data models and REST endpoints.",
        },
      ],
    },
    {
      company: "XYZ Corporation",
      role: "Software Engineer",
      duration: "July 2016 - December 2018",
      projects: [
        {
          name: "Project 3",
          description:
            "Developed a mobile application using React Native for tracking fitness activities.",
          technologies: ["React Native", "Redux", "Firebase"],
          contributions:
            "Led the development of the user interface and integrated with Firebase backend.",
        },
        {
          name: "Project 4",
          description:
            "Implemented a data analytics dashboard using AngularJS and D3.js.",
          technologies: ["AngularJS", "D3.js", "RESTful APIs"],
          contributions:
            "Designed and developed interactive visualizations for data analysis.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{experience.role}</h3>
            <p className="text-gray-600 mb-2">
              {experience.company} ({experience.duration})
            </p>
            {experience.projects.map((project, index) => (
              <div
                key={index}
                className="mb-4 p-6 bg-white rounded-md shadow-md transition duration-500 ease-in-out transform hover:scale-105"
              >
                <h4 className="text-lg font-semibold">{project.name}</h4>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap items-center mt-2">
                  <span className="text-gray-600 mr-2">Technologies:</span>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-2">{project.contributions}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
