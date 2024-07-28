import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from './AdminSidebar';
import CreadorManuales from './creador-manuales/page';
import FichaDeFranquicia from './ficha-de-franquicia/page';
import LocalizadorEstrategico from './Localizadorestrategico/localizadorestrategico';
import { supabase } from '../../lib/supabase';
import { FaBars } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Administrador: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const isDemoLogin = localStorage.getItem('demoLogin') === 'true';
      if (!isDemoLogin) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          router.push('/login');
        }
      }
    };

    checkUser();
  }, [router]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('demoLogin');
    router.push('/');
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Resumen general de la actividad de la empresa.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {/* Ejemplos de tarjetas del dashboard */}
              </div>
            </CardContent>
          </Card>
        );
      case 'creador-manuales':
        return <CreadorManuales />;
      case 'ficha-de-franquicia':
        return <FichaDeFranquicia />;
      case 'localizador-estrategico':
        return <LocalizadorEstrategico />;
      default:
        return (
          <div>
            <h1 className="text-2xl font-bold">Bienvenido</h1>
            <p>Seleccione una opción del menú.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background overflow-x-hidden">
      <AdminSidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex flex-col flex-1 sm:gap-4 sm:py-4 sm:pl-64">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-black px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Button variant="outline" size="icon" className="sm:hidden" onClick={toggleMenu}>
            <FaBars className="h-5 w-5 text-white" />
          </Button>
          <div className="relative ml-auto flex-1 md:grow-0">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
          </div>
          <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
            <img src="/placeholder.svg" width={36} height={36} alt="Avatar" className="overflow-hidden rounded-full" />
          </Button>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Administrador;