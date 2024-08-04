"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const TestForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyInfo, setCompanyInfo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    setCompanyInfo(null);

    try {
      const response = await fetch('/api/search-company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error desconocido');
      }

      const data = await response.json();
      setCompanyInfo(data.summary);
    } catch (err: any) {
      setError(err.message || 'Error al buscar la empresa.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
            ¿Cómo se llama tu empresa?
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
            className="bg-gray-800 text-white w-full p-2 rounded"
          />
        </div>
        <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
          {isLoading ? 'Buscando...' : 'Buscar'}
        </Button>

        {error && <div className="text-red-500">{error}</div>}
        {companyInfo && (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Resumen de la Empresa</h2>
            <p className="mt-2">{companyInfo}</p>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300">
                ¿Es cierta esta información?
              </label>
              <Button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md mt-2">
                Sí
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md mt-2 ml-2">
                No
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestForm;
