import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8"></h2>
        <div className="">
          {/* Frontend Skills */}
          <div className="w-full flex flex-wrap justify-center items-center mb-8">
            <h3 className="text-2xl font-bold w-full mb-4">Frontend Skills</h3>
            <SkillCard
              skillName="JavaScript"
              proficiency="95%"
              imageUrl="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"
            />
            <SkillCard
              skillName="React"
              proficiency="90%"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCnWgWBUZE00K6hQExqoTGPgLzMLWyWZxh0SLkhE93Q&s"
            />
            <SkillCard
              skillName="CSS"
              proficiency="85%"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lBJ4VTdro7PwcUoAAMaYyj_psG5FCucupPWZG3fUbQ&sg"
            />
            <SkillCard
              skillName="HTML"
              proficiency="95%"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s"
            />
          </div>
          {/* Backend Skills */}
          <div className="w-full flex flex-wrap justify-center items-center">
            <h3 className="text-2xl font-bold w-full mb-4">Backend Skills</h3>
            <SkillCard
              skillName="Java"
              proficiency="90%"
              imageUrl="https://cdn.clever-cloud.com/uploads/2023/06/java.svg"
            />
            <SkillCard
              skillName="Spring Boot"
              proficiency="85%"
              imageUrl="https://trellat.es/wp-content/uploads/spring-boot-logo.png"
            />
            <SkillCard
              skillName="Hibernate"
              proficiency="80%"
              imageUrl="https://miro.medium.com/v2/resize:fit:400/0*jba3dz1j64rfhl5i.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skillName, proficiency, imageUrl }) => {
  return (
    <div className="bg-white w-[200px] h-[250px] rounded-md overflow-hidden shadow-md mr-9 mb-2">
      <div className="bg-gray-300 h-40 flex justify-center items-center">
        <img className="w-full h-full" src={imageUrl} alt={skillName} />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold">{skillName}</h4>
        <p className="text-sm">{proficiency} Proficiency</p>
      </div>
    </div>
  );
};

export default Skills;
