import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-blue-600 text-white py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a 2TGym</h1>
        <p className="text-2xl mb-8">El primer gimnasio de levantamiento de pesas olímpico en Argentina</p>
        <p className="text-xl mb-8">Descubre la fuerza y técnica del deporte olímpico</p>
        <a href="#contacto" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
          ¡Comienza tu entrenamiento olímpico!
        </a>
      </div>
    </section>
  );
};

export default Hero;