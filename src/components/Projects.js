// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Over the past year, my focus has been on developing dynamic web
            applications using React.js, demonstrating my commitment to
            mastering this technology. I began by building a fundamental Todo
            App, which efficiently organizes user-input tasks into categorized
            lists of completed and pending items. Progressing from there, I
            expanded my repertoire by developing a Weather App that leverages
            API data to provide accurate forecasts for the next seven days,
            enriching my understanding of data integration and visualization.
            Motivated by a project I encountered on GitHub, I embarked on the
            creation of a sample travel website, showcasing my ability to blend
            my passion for travel with my proficiency in React.js. This project
            not only highlighted my design skills but also underscored my
            ability to implement complex features using React's robust
            framework. Continuing my journey, I undertook the development of a
            sample employee database (CRUD) application, where React served as
            the presentation layer. Leveraging Node.js and Express.js as the
            middleware, along with MongoDB as the database, I orchestrated a
            seamless flow of data, reinforcing my proficiency in full-stack
            development. Proficient in React.js, I excel in state management,
            employing tools such as Redux to ensure smooth application flow.
            Additionally, my experience in integrating RESTful APIs further
            enriches my skill set, enabling me to consistently deliver
            responsive solutions that exceed user expectations
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
