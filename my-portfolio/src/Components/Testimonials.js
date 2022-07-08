import React from 'react';

import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-20 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 text-blue-700 " />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-blue-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-blue-700 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-200">
                      {testimonial.name}
                    </span>
                    <span className="text-red-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}