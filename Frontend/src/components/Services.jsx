import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Photography',
      description: 'High-quality photography for events, products, and campaigns.',
      image: '/assets/images/neth1.jpeg'
    },
    {
      title: 'Videography',
      description: 'Professional video production and editing services.',
      image: '/assets/images/neth2.jpeg'
    },
    {
      title: 'Graphic Designing',
      description: 'Creative design for branding, print, and digital media.',
      image: '/assets/images/neth3.jpeg'
    },
    {
      title: 'Photo Printing',
      description: 'Premium photo printing services with high-quality materials.',
      image: '/assets/images/neth4.jpeg'
    },
    {
      title: 'Photo Selling',
      description: 'Sell your photos with us through our platform.',
      image: '/assets/images/neth5.jpeg'
    },
    {
      title: 'Printing & Publishing',
      description: 'All kinds of printing and publishing solutions.',
      image: '/assets/images/neth6.jpeg'
    },
    {
      title: 'Advertising',
      description: 'Effective advertising strategies and execution.',
      image: '/assets/images/neth7.jpeg'
    },
    {
      title: 'Online Service',
      description: 'Digital solutions for your business needs.',
      image: '/assets/images/neth8.jpeg'
    },
    {
      title: 'IT Knowledge',
      description: 'Comprehensive IT support and solutions.',
      image: '/assets/images/neth9.jpeg'
    },
    {
      title: 'Souvenir Manufacturing',
      description: 'Custom souvenirs for events and businesses.',
      image: '/assets/images/neth1.jpeg'
    },
    {
      title: 'T-Shirt Printing & Digitize',
      description: 'Personalized t-shirt printing and digitization.',
      image: '/assets/images/neth2.jpeg'
    },
    {
      title: 'Laser Cutting & Engraving',
      description: 'Precision laser cutting and engraving services.',
      image: '/assets/images/neth3.jpeg'
    },
    {
      title: 'Import & Supply',
      description: 'Import and supply of quality products.',
      image: '/assets/images/neth4.jpeg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital and creative services to help your business grow and succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;