import React from 'react';

const Team = () => {
  const boardMembers = [
    {
      name: 'Indunil Sampath Rajapaksha',
      role: 'Managing Director (MD)',
      image: '/assets/images/D1.jpg',
      bio: 'Overall management, business strategy'
    },
    {
      name: 'Madhuka Shyamali Samarasinghe',
      role: 'Executive Director',
      image: '/assets/images/D2.jpg',
      bio: 'Finance, operations, and marketing'
    },
    {
      name: 'Nethma Sithumi Rajapaksha',
      role: 'Non-Executive Director',
      image: '/assets/images/D3.jpg',
      bio: 'Legal, governance, and industry experience'
    }
  ];

  const teamMembers = [
    {
      name: 'E.M. Tharuk Bandara Jayathilaka',
      role: 'Senior Graphic Designer & IT Administrator',
      image: '/assets/images/T1.png',
      bio: 'Higher National Diploma in Information Technology (HNDIT), Cisco Certified Network Associate (CCNA), Diploma In Information Technology With E-Commerce/Di.T.E.C @ E-Soft. Senior Graphic Designer with 13 years experience, Photographer and Editor, Video Grapher and Video Editor, Online Applications Expert, IT Administrator, Digital Media Design and Printing specialist.'
    },
    {
      name: 'Madhushika Sandamali',
      role: 'Senior Graphic Designer',
      image: '/assets/images/T2.jpg',
      bio: 'Senior Graphic Designer with 13 years experience, Diploma in Information Technology, Diploma in Graphic Designing, Book Binding Expert.'
    },
    {
      name: 'K.G Jayathissa',
      role: 'Senior Graphic Designer & Photographer',
      image: '/assets/images/T3.jpg',
      bio: 'Senior Graphic Designer with 15 years experience, Senior Photographer.'
    },
    {
      name: 'Jayani Randula',
      role: 'ICT Technician & HR Specialist',
      image: '/assets/images/T4.jpg',
      bio: 'Diploma in Information Technology, Information & Communication Technology Technician, Advanced Certificate in HRM (CIPM).'
    },
    {
      name: 'Gayana Ruwani',
      role: 'ICT Technician & HR Specialist',
      image: '/assets/images/T5.jpg',
      bio: 'Information & Communication Technology Technician, Diploma In HRM, Diploma In Tamil.'
    },
    {
      name: 'Senuri Lakshika',
      role: 'Computer Applications Assistant',
      image: '/assets/images/T6.jpg',
      bio: 'HND in Tamil Language, Certified Computer Applications Assistant.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Board of Directors Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Board of Directors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our leadership team provides strategic direction and governance for NethDigital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {boardMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100"
            >
              <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-md"
                  style={{ 
                    objectFit: 'contain',
                    maxHeight: '180px',
                    maxWidth: '100%'
                  }}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-medium mb-3 text-base">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Members Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of professionals is dedicated to delivering exceptional results for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-56 w-full flex items-center justify-center bg-gray-50 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center center',
                    maxHeight: '200px',
                    maxWidth: '100%'
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 01-2.355.635 4.074 4.074 0 001.8-2.235 8.344 8.344 0 01-2.605.98A4.13 4.13 0 0013.85 0a4.068 4.068 0 00-4.1 4.038 4 4 0 00.105.919A11.705 11.705 0 011.4.734a4.006 4.006 0 001.268 5.392 4.165 4.165 0 01-1.859-.5v.05A4.057 4.057 0 005.1 9.635a4.19 4.19 0 01-1.856.07 4.108 4.108 0 003.831 2.807A8.36 8.36 0 010 14.184a11.732 11.732 0 006.291 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.304 8.304 0 0020 1.892z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Team;