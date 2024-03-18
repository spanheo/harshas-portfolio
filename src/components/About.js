// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Harsha.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            As a self-taught front-end developer, I am passionate about
            designing, developing, and implementing innovative web applications
            using React.js. During my tenure at Helpdesk over the past year, I
            have dedicated myself to refining my skills in front-end
            development. I have specialized in creating responsive user
            interfaces that significantly enhance the overall user experience.
            While my professional background has primarily been in QA and
            technical support, I am eager to transition into a front-end
            engineering role. I am confident that my experience and expertise in
            web development, coupled with my strong drive for innovation, make
            me well-suited for this transition. I am committed to furthering my
            growth and contributing effectively to front-end engineering teams.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Portfolio-pic.JPG"
          />
        </div>
      </div>
    </section>
  );
}
