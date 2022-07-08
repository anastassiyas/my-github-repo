import React from 'react';

import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../data";

 function Projects() {
  return (
    // <div className="py-12">
		// 	<sectionTitle id="projects">Recent Works</SectionTitle>
		// 	<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
		// 		{projectss.map(project => (
		// 			<WorkItem
		// 				key={project.title}
		// 				imgUrl={project.img}
		// 				title={project.title}
		// 				subtitle={project.subtitle}
    //         description={project.discription}
		// 				link={project.link}
		// 			/>
		// 		))}
		// 	</div>
		// </div>
    <section id="projects" className="text-gray-200 bg-red-500 body-font">
      <div className="container px-3 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-7">
           <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-200">
            Apps I've Built
          </h1>
                </div>
        <div className="flex flex-wrap -m-6">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-2 rounded-lg">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute w-full h-full inset-x-0 top-0 object-cover object-center rounded-lg "
                  src={project.image}
                  
                />
                <img
                  alt="cradle"
                  className=" content:''; 
                  background-size: contain;
                  bottom: 1%;
                  
                 
                  left: -6.5%;
                 
                  right: -6.5%;
                 
                  z-index: 1;
                  
                     absolute inset-x-0 bottom-0 w-full h-10 object-cover  "
                  src={project.cradle}
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500  bg-green-200 opacity-0 hover:opacity-100 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-blue-600 mb-3">
                    {project.title}
                  </h1>
                  <p className="text-blue-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects

