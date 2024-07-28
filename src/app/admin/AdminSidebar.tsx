import React from 'react';
import Link from 'next/link';
import { FaBox, FaHome, FaShoppingCart, FaChartLine, FaCog, FaMapMarkedAlt, FaInbox, FaStore } from 'react-icons/fa';

interface AdminSidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-black sm:w-64">
      <div className="flex h-[60px] items-center justify-between px-6 sm:justify-center">
        <Link href="#" className="flex items-center gap-2 font-semibold text-white" prefetch={false}>
          <FaBox className="h-6 w-6" />
          <span>Franmaker</span>
        </Link>
      </div>
      <div className="flex flex-col flex-grow justify-between overflow-y-auto py-4">
        <nav className="grid items-start px-4 text-sm font-medium space-y-1">
          <button
            onClick={() => setActivePage('dashboard')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold ${
              activePage === 'dashboard' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaHome className="h-4 w-4" />
            Inicio
          </button>
          <button
            onClick={() => setActivePage('creador-manuales')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold ${
              activePage === 'creador-manuales' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaShoppingCart className="h-4 w-4" />
            Creador de manuales
          </button>
          <button
            onClick={() => setActivePage('localizador-estrategico')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold ${
              activePage === 'localizador-estrategico' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaMapMarkedAlt className="h-4 w-4" />
            Localizador estratégico
          </button>
        </nav>
        
        <div className="px-4 space-y-1">
          <button
            onClick={() => setActivePage('marketplace')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold w-full ${
              activePage === 'marketplace' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaStore className="h-4 w-4" />
            Marketplace
          </button>
          <button
            onClick={() => setActivePage('ficha-de-franquicia')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold pl-8 w-full ${
              activePage === 'ficha-de-franquicia' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaBox className="h-4 w-4" />
            Ficha de franquicia
          </button>
          <button
            onClick={() => setActivePage('bandeja-de-entrada')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold pl-8 w-full ${
              activePage === 'bandeja-de-entrada' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaInbox className="h-4 w-4" />
            Bandeja de entrada
          </button>
          <button
            onClick={() => setActivePage('estadisticas')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold pl-8 w-full ${
              activePage === 'estadisticas' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaChartLine className="h-4 w-4" />
            Estadísticas
          </button>
        </div>
        
        <div className="px-4 mt-auto">
          <button
            onClick={() => setActivePage('configuraciones')}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white hover:text-black hover:font-bold w-full ${
              activePage === 'configuraciones' ? 'bg-white text-black font-bold' : 'text-white'
            }`}
          >
            <FaCog className="h-4 w-4" />
            Configuraciones
          </button>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;