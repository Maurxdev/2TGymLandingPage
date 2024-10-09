import React from 'react';

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1542459629-519887d476da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Levantamiento de pesas olímpico" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Sobre 2TGym</h2>
            <p className="text-gray-700 mb-4">
              2TGym es pionero en Argentina como el primer gimnasio dedicado exclusivamente al levantamiento de pesas olímpico. Fundado por atletas olímpicos y entrenadores de élite, nuestro objetivo es elevar el nivel de este deporte en el país.
            </p>
            <p className="text-gray-700 mb-4">
              Nuestras instalaciones de clase mundial incluyen plataformas oficiales, barras y discos certificados por la IWF, y un sistema de entrenamiento basado en la metodología de los mejores equipos olímpicos del mundo.
            </p>
            <p className="text-gray-700">
              En 2TGym, no solo entrenamos atletas, formamos campeones. Desde principiantes curiosos hasta competidores de élite, ofrecemos el ambiente y la experticia necesaria para que alcances tu máximo potencial en el levantamiento olímpico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;