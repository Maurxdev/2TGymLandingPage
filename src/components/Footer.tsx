import React from 'react';
import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Dumbbell className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">2TGym</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-200 transition duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-200 transition duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; 2023 2TGym - El primer gimnasio de levantamiento de pesas olímpico en Argentina. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;