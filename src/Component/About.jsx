import React from "react";
import image from "../Image/akash.jpeg";

const About = () => {
  return (
    <section id="about" className="py-15 font-mono bg-gray-100 ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className=" ml-[200px] lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="rounded-2xl w-[300px] h-[450px]  lg:mx-0 "
              src={image}
              alt="Your Name"
            />
          </div>
          <div className="mr-[300px] lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              I'm a Full Stack Developer with expertise in Java, Spring, React,
              and more. I love building scalable and efficient web applications
              that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700">
              Feel free to contact me if you'd like to collaborate or learn more
              about my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
