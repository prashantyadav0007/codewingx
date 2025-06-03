import React from 'react';

const projects = [
  { title: 'E-Commerce App', image: 'https://via.placeholder.com/400x250' },
  { title: 'Landing Page', image: 'https://via.placeholder.com/400x250' },
  { title: 'Portfolio Website', image: 'https://via.placeholder.com/400x250' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition"
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
