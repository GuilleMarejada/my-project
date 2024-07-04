import React from 'react';
import logoMueble from '../assets/muebleAbitacolo.png';
import logoAbitacolo from '../assets/logoabitacolo.png';

const Navbar = () => {
  return (
    <div>
      <div className='bg-black text-center h-10'></div>
      <nav className="flex justify-between items-center py-4 mx-20 border-b-4 border-black">
        <img src={logoAbitacolo} alt="Logo Abitacolo" />
        <ul className="flex space-x-4 place-self-end text-lg">
          <li className="relative after:content-['·'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-lg after:text-black">
            <a href="#" className="hover:underline">ESP</a>/<span>ENG</span>
          </li>
          <li className="relative after:content-['·'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-lg after:text-black">
            <a href="#" className="hover:underline">FAQ</a>
          </li>
          <li className="relative after:content-['·'] after:absolute after:right-[-12px] after:top-1/2 after:transform after:-translate-y-1/2 after:text-lg after:text-black">
            <a href="#" className="hover:underline">nuestra misión</a>
          </li>
          <li className="relative">
            <a href="#" className="hover:underline">mi cuenta</a>
          </li>
        </ul>
      </nav>
      <header className="text-center my-12 flex flex-col md:flex-row justify-between mx-20 md:mx-48">
        <div className='w-full md:w-1/2'>
          <p className="mt-4 text-2xl text-left">
            decora tu hogar <span className="font-bold">en Madrid</span> de forma más fácil, barata y sostenible alquilando nuestros <span className="font-bold">muebles recuperados</span>
          </p>
          <div className="mt-8 text-sm border-b-2 border-black flex justify-between">
            <p>hasta 21 · 12 · 2024</p>
            <span className="font-bold">177 muebles recuperados</span>
          </div>
        </div>
        <img src={logoMueble} alt="Mueble Abitacolo" className="mt-4 md:mt-0 w-full md:w-auto" />
      </header>
      <div className='mx-5 mb-5 flex justify-between'>
        <a href="#" className='font-bold text-lg'>¿podemos ayudarte?</a>
        <p className='font-bold text-lg'>ajustes y configuración de cookies</p>
      </div>
    </div>
  );
};

export default Navbar;
