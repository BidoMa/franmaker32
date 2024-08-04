"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import NavBar from '@/components/NavBar'; // Asegúrate de que la ruta sea correcta

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        router.push('/admin'); // Redirige a la página de administrador si el login es exitoso
      }
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error);
      setError(error.message || 'Error al iniciar sesión. Por favor, inténtelo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem('demoLogin', 'true'); // Establece una bandera de sesión de demostración
    router.push('/admin'); // Redirige a la página de administrador para el demo
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen bg-black mt-14"> {/* Añade mt-14 para espacio debajo del NavBar */}
        <Card className="w-full max-w-md p-6 space-y-6 bg-gray-800 text-white shadow-md rounded-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Iniciar sesión</CardTitle>
            <CardDescription>Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="ejemplo@email.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="bg-gray-700 text-white" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="********" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="bg-gray-700 text-white" 
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <CardFooter className="flex flex-col gap-4 mt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </Button>
                <Button 
                  onClick={handleDemoLogin} 
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
                >
                  Iniciar sesión Demo
                </Button>
                <div className="text-center text-sm text-gray-400">
                  ¿No tienes una cuenta?{' '}
                  <Link href="/login/register" className="font-medium text-blue-500 hover:underline">
                    Crear cuenta
                  </Link>
                </div>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
