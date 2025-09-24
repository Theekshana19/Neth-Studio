import React from 'react';

const Hero = () => (
  <section id="home" className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/assets/images/hero.jpg')"}}>
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">We create digital experiences that matter.</h1>
      <p className="mb-8 text-lg md:text-2xl">Showcasing creativity, technology, and results.</p>
      <a href="#services" className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary transition">Our Services</a>
    </div>
  </section>
);

export default Hero;
