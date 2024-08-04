"use client";

import React from 'react';
import NavBar from '@/components/NavBar'; // Asegúrate de que la ruta es correcta
import TestForm from '@/components/TestForm'; // Importa el nuevo componente de formulario

const TestPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="flex justify-center items-center pt-16">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Test de Franquiciabilidad</h1>
          <p className="mt-4 text-xl text-center">
            Aquí puedes realizar el test de franquiciabilidad para evaluar tu negocio.
          </p>
          <TestForm />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
