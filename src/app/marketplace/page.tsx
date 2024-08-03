'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import NavBar from '@/components/NavBar'; // Ajuste de la ruta de importación
import './styles.css';

const franchises = [
  // Aquí irían los datos de las franquicias. Este es un ejemplo.
  { id: 1, name: "Franquicia A", description: "Descripción de la Franquicia A", category: "Restaurante" },
  { id: 2, name: "Franquicia B", description: "Descripción de la Franquicia B", category: "Retail" },
  // Agrega más franquicias según sea necesario
];

const categories = ["Todos", "Restaurante", "Retail", "Servicios", "Tecnología"];

const HomeMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredFranchises = franchises.filter((franchise) => {
    const matchesCategory = selectedCategory === 'Todos' || franchise.category === selectedCategory;
    const matchesSearch = franchise.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      <header className="bg-primary p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary-foreground">Marketplace de Franquicias</h1>
          <div className="flex items-center space-x-4">
            <Input 
              type="text" 
              placeholder="Buscar franquicia..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-64"
            />
            <Button>Buscar</Button>
          </div>
        </div>
      </header>
      <div className="container mx-auto flex flex-1">
        <aside className="w-64 p-4 bg-secondary text-secondary-foreground">
          <h2 className="text-xl font-bold mb-4">Filtros</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Categorías</h3>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <Button 
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className="w-full text-left mb-2"
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          {/* Puedes agregar más filtros aquí */}
        </aside>
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFranchises.map((franchise) => (
              <Card key={franchise.id} className="bg-card">
                <CardHeader>
                  <CardTitle>{franchise.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{franchise.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button>Ver más</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeMarketplace;
