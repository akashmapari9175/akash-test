import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ante ac dui interdum placerat.",
      githubLink: "https://github.com/project1",
    },
    {
      name: "Project 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      githubLink: "https://github.com/project2",
    },
    {
      name: "Project 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
      githubLink: "https://github.com/project3",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                className="text-blue-500 hover:underline"
              >
                GitHub Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
