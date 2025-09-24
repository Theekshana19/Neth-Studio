import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/assets/images/neth1.jpeg',
      title: 'Photography Portfolio',
      category: 'Photography'
    },
    {
      id: 2,
      image: '/assets/images/neth2.jpeg',
      title: 'Video Production',
      category: 'Videography'
    },
    {
      id: 3,
      image: '/assets/images/neth3.jpeg',
      title: 'Graphic Design Work',
      category: 'Design'
    },
    {
      id: 4,
      image: '/assets/images/neth4.jpeg',
      title: 'Print Projects',
      category: 'Printing'
    },
    {
      id: 5,
      image: '/assets/images/neth5.jpeg',
      title: 'Creative Campaigns',
      category: 'Advertising'
    },
    {
      id: 6,
      image: '/assets/images/neth6.jpeg',
      title: 'Digital Solutions',
      category: 'IT'
    },
    {
      id: 7,
      image: '/assets/images/neth7.jpeg',
      title: 'Custom Products',
      category: 'Manufacturing'
    },
    {
      id: 8,
      image: '/assets/images/neth8.jpeg',
      title: 'Brand Identity',
      category: 'Design'
    },
    {
      id: 9,
      image: '/assets/images/neth9.jpeg',
      title: 'Event Coverage',
      category: 'Photography'
    }
  ];

  const categories = ['All', 'Photography', 'Videography', 'Design', 'Printing', 'Advertising', 'IT', 'Manufacturing'];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of creative projects and successful campaigns.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white text-gray-700 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;