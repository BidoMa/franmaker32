"use client"; // Asegúrate de que esto esté en la primera línea

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 lg:px-6 h-14 bg-black text-white fixed top-0 w-full z-50">
      <Link href="/" className="flex items-center">
        <img src="https://iili.io/dRDc8Mv.png" alt="Logo" className="h-16 w-auto" />
        <span className="sr-only">Franmaker</span>
      </Link>
      <div className="hidden md:flex items-center gap-4">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
          Precios
        </Link>
        <Link href="/marketplace">
          <Button variant="outline" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium animate-glow-center">
            Marketplace
          </Button>
        </Link>
        <Link href="/test" className="text-sm font-medium hover:underline underline-offset-4">
          Test de Franquiciabilidad
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Link href="/login">
          <Button variant="outline" className="px-4 py-2 rounded-md text-sm font-medium">
            Iniciar Sesión
          </Button>
        </Link>
        <Link href="/login/register">
          <Button className="px-4 py-2 rounded-md text-sm font-medium">Registrarse</Button>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleMenuToggle} className="text-white">
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-black text-white flex flex-col items-center gap-4 p-4 md:hidden">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" onClick={handleMenuToggle}>
            Precios
          </Link>
          <Link href="/marketplace" className="w-full" onClick={handleMenuToggle}>
            <Button variant="outline" className="w-full bg-black text-white px-4 py-2 rounded-md text-sm font-medium animate-glow-center">
              Marketplace
            </Button>
          </Link>
          <Link href="/test" className="w-full" onClick={handleMenuToggle}>
            <Button variant="outline" className="w-full text-sm font-medium hover:underline underline-offset-4">
              Test de Franquiciabilidad
            </Button>
          </Link>
          <Link href="/login" className="w-full" onClick={handleMenuToggle}>
            <Button variant="outline" className="w-full px-4 py-2 rounded-md text-sm font-medium">
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/login/register" className="w-full" onClick={handleMenuToggle}>
            <Button className="w-full px-4 py-2 rounded-md text-sm font-medium">Registrarse</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
