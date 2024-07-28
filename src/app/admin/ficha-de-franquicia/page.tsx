"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FichaDeFranquicia() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <Card className="w-full max-w-4xl p-6 space-y-6 bg-gray-800 text-white shadow-md rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Ficha de franquicia</CardTitle>
          <CardDescription>Completa la información de tu franquicia para el marketplace.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            {/* Información General */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">Nombre de la franquicia</label>
                <Input id="nombre" type="text" placeholder="Nombre" className="bg-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="sector" className="block text-sm font-medium text-gray-300">Sector o industria</label>
                <Input id="sector" type="text" placeholder="Sector" className="bg-gray-700 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-300">Descripción breve</label>
              <textarea id="descripcion" placeholder="Descripción" className="bg-gray-700 text-white w-full h-24 p-2 rounded-md" />
            </div>
            <div className="space-y-2">
              <label htmlFor="historia" className="block text-sm font-medium text-gray-300">Historia de la franquicia</label>
              <textarea id="historia" placeholder="Historia" className="bg-gray-700 text-white w-full h-24 p-2 rounded-md" />
            </div>
            
            {/* Detalles de Contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="direccion" className="block text-sm font-medium text-gray-300">Dirección de la oficina principal</label>
                <Input id="direccion" type="text" placeholder="Dirección" className="bg-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-300">Teléfono de contacto</label>
                <Input id="telefono" type="text" placeholder="Teléfono" className="bg-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="correo" className="block text-sm font-medium text-gray-300">Correo electrónico de contacto</label>
                <Input id="correo" type="email" placeholder="Correo" className="bg-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="sitio-web" className="block text-sm font-medium text-gray-300">Sitio web oficial</label>
                <Input id="sitio-web" type="url" placeholder="Sitio web" className="bg-gray-700 text-white" />
              </div>
            </div>
            
            {/* Detalles Financieros */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="inversion" className="block text-sm font-medium text-gray-300">Inversión inicial</label>
                <Input id="inversion" type="text" placeholder="Inversión" className="bg-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="tarifa" className="block text-sm font-medium text-gray-300">Tarifa de franquicia</label>
                <Input id="tarifa" type="text" placeholder="Tarifa" className="bg-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="regalias" className="block text-sm font-medium text-gray-300">Regalías</label>
                <Input id="regalias" type="text" placeholder="Regalías" className="bg-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="ingreso" className="block text-sm font-medium text-gray-300">Ingreso anual estimado</label>
                <Input id="ingreso" type="text" placeholder="Ingreso" className="bg-gray-700 text-white" />
              </div>
            </div>
            
            {/* Requisitos del Franquiciado */}
            <div className="space-y-2">
              <label htmlFor="experiencia" className="block text-sm font-medium text-gray-300">Requisitos de experiencia</label>
              <textarea id="experiencia" placeholder="Experiencia" className="bg-gray-700 text-white w-full h-24 p-2 rounded-md" />
            </div>
            <div className="space-y-2">
              <label htmlFor="capital" className="block text-sm font-medium text-gray-300">Capital mínimo requerido</label>
              <Input id="capital" type="text" placeholder="Capital" className="bg-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <label htmlFor="areas" className="block text-sm font-medium text-gray-300">Áreas disponibles para la franquicia</label>
              <textarea id="areas" placeholder="Áreas" className="bg-gray-700 text-white w-full h-24 p-2 rounded-md" />
            </div>
            <div className="space-y-2">
              <label htmlFor="soporte" className="block text-sm font-medium text-gray-300">Soporte y formación proporcionados</label>
              <textarea id="soporte" placeholder="Soporte" className="bg-gray-700 text-white w-full h-24 p-2 rounded-md" />
            </div>
            
            {/* Imágenes y Medios */}
            <div className="space-y-2">
              <label htmlFor="logo" className="block text-sm font-medium text-gray-300">Logotipo de la franquicia</label>
              <Input id="logo" type="file" accept="image/*" className="bg-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <label htmlFor="imagenes" className="block text-sm font-medium text-gray-300">Imágenes de los locales</label>
              <Input id="imagenes" type="file" accept="image/*" multiple className="bg-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <label htmlFor="videos" className="block text-sm font-medium text-gray-300">Videos promocionales</label>
              <Input id="videos" type="file" accept="video/*" multiple className="bg-gray-700 text-white" />
            </div>
            
            {/* Testimonios y Opiniones */}
            <div className="space-y-2">
              <label htmlFor="testimonios" className="block text-sm font-medium text-gray-300">Testimonios de franquiciados actuales</label>
              <textarea id="testimonios" placeholder="Testimonios" className="bg-gray-700 text-white w-full h-24 p-2 rounded-md" />
            </div>
            <div className="space-y-2">
              <label htmlFor="opiniones" className="block text-sm font-medium text-gray-300">Opiniones de clientes</label>
              <textarea id="opiniones" placeholder="Opiniones" className="bg-gray-700 text-white w-full h-24 p-2 rounded-md" />
            </div>
            
            {/* Documentos Adicionales */}
            <div className="space-y-2">
              <label htmlFor="manuales" className="block text-sm font-medium text-gray-300">Manuales de operaciones</label>
              <Input id="manuales" type="file" accept=".pdf,.doc,.docx" multiple className="bg-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <label htmlFor="presentaciones" className="block text-sm font-medium text-gray-300">Presentaciones y catálogos</label>
              <Input id="presentaciones" type="file" accept=".pdf,.ppt,.pptx" multiple className="bg-gray-700 text-white" />
            </div>
            <div className="space-y-2">
              <label htmlFor="formularios" className="block text-sm font-medium text-gray-300">Formularios de solicitud</label>
              <Input id="formularios" type="file" accept=".pdf,.doc,.docx" multiple className="bg-gray-700 text-white" />
            </div>
            
            <CardFooter className="flex flex-col gap-4 mt-4">
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                Guardar
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
