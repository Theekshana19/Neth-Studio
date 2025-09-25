import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About NethDigital
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              NethDigital is a creative digital agency dedicated to delivering impactful solutions in photography, videography, design, and technology. Our mission is to empower brands and individuals with innovative digital experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 10 years of experience, we have successfully completed 100+ projects for 50+ satisfied clients. Our vision is to be the leading digital partner in the region, providing cutting-edge solutions that drive results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="/assets/images/neth2.jpeg" 
              alt="About NethDigital" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;