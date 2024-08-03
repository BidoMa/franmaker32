// src/app/ClientLayout.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NavBar from "../components/NavBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Condiciona la visualización del NavBar según la ruta
  const showNavBar = pathname === '/';

  return (
    <>
      {showNavBar && (
        <header>
          <NavBar /> {/* Aquí incluimos la barra de navegación */}
        </header>
      )}
      <main>{children}</main>
      <footer>
        {/* Footer, si lo necesitas */}
      </footer>
    </>
  );
}
