import React from 'react';
function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">
            Hi, I'm Anastassiya.
            <br className="hidden lg:inline-block" />I am a Full stack web developer.<br />
             I give life to designs. <br />I love to build amazing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Creating Beautiful things with quality and elegance! <br />
            My favourite technology is ReactJS.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-olive bg-yellow-200 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-200 bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-200 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face"> */}
          <img
            className="block mx-auto h-96 rounded-full sm:mx-5 sm:shrink-5 border-8 border-yellow-200" alt="my face"
            src="./portfolio.png"
          />
        </div>
      </div>
    </section>
  );
}
export default About;



