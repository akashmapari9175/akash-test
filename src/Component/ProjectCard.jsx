import React from "react";

const ProjectsCard = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Blog App Apis"
            description="The Blog App APIs simplify user, post, and category management for blog platforms. It offers secure CRUD operations, robust authentication, and efficient pagination for optimal performance."
            imageUrl="https://via.placeholder.com/300"
            githubLink="https://github.com/akashmapari9175/blog-app-apis"
            demoLink=""
          />
          <ProjectCard
            title="Java Spring Blog"
            description="A blog application built using Java Spring."
            imageUrl="https://via.placeholder.com/300"
            githubLink="https://github.com/example/java-spring-blog"
            demoLink="#"
          />
          <ProjectCard
            title="Java Spring Blog"
            description="A blog application built using Java Spring."
            imageUrl="https://via.placeholder.com/300"
            githubLink="https://github.com/example/java-spring-blog"
            demoLink="#"
          />
          {/* Add more ProjectCard components for other projects */}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between">
          <a href={githubLink} className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href={demoLink} className="text-blue-500 hover:underline">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
