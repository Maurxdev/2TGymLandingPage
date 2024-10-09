import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Dumbbell className="w-8 h-8 mr-2" />
          <span className="text-2xl font-bold">2TGym</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#inicio" className="hover:text-blue-200">Inicio</a></li>
            <li><a href="#caracteristicas" className="hover:text-blue-200">Características</a></li>
            <li><a href="#sobre-nosotros" className="hover:text-blue-200">Sobre Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-blue-200">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;