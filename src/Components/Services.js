import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Responsive and scalable websites tailored to your business needs.',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that offer an engaging user experience.',
  },
  {
    title: 'Branding',
    description: 'Create strong, consistent brand identities across platforms.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
