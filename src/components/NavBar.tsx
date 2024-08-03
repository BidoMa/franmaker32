import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importar iconos

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 lg:px-6 h-14 bg-black text-white">
      <Link href="/" className="flex items-center justify-center">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Franmaker</span>
      </Link>
      <div className="hidden md:flex items-center gap-4">
        {["Características", "Precios", "Marketplace", "Acerca de", "Contacto"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium hover:underline underline-offset-4">
            {item}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Link href="/login">
          <Button variant="outline" className="px-4 py-2 rounded-md text-sm font-medium">
            Iniciar Sesión
          </Button>
        </Link>
        <Button className="px-4 py-2 rounded-md text-sm font-medium">Registrarse</Button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleMenuToggle} className="text-white">
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-black text-white flex flex-col items-center gap-4 p-4 md:hidden">
          {["Características", "Precios", "Marketplace", "Acerca de", "Contacto"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium hover:underline underline-offset-4" onClick={handleMenuToggle}>
              {item}
            </Link>
          ))}
          <Link href="/login" className="w-full">
            <Button variant="outline" className="w-full px-4 py-2 rounded-md text-sm font-medium">
              Iniciar Sesión
            </Button>
          </Link>
          <Button className="w-full px-4 py-2 rounded-md text-sm font-medium">Registrarse</Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

type IconProps = React.SVGProps<SVGSVGElement>;

function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

