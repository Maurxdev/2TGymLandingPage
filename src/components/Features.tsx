import React from 'react';
import { Dumbbell, Users, Award, Clock } from 'lucide-react';

const features = [
  { icon: Dumbbell, title: 'Equipamiento Olímpico', description: 'Barras, discos y plataformas de competición internacional' },
  { icon: Users, title: 'Entrenadores Expertos', description: 'Coaches certificados en levantamiento olímpico con experiencia internacional' },
  { icon: Award, title: 'Programas Especializados', description: 'Planes de entrenamiento para arranque y envión' },
  { icon: Clock, title: 'Horarios Flexibles', description: 'Abierto de lunes a sábado, adaptado a tu rutina' },
];

const Features = () => {
  return (
    <section id="caracteristicas" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir 2TGym?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;