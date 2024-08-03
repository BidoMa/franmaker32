import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-4xl font-bold mb-4">404 - Franquicia no encontrada</h2>
      <p className="text-xl mb-8">Lo sentimos, no pudimos encontrar la franquicia que estás buscando.</p>
      <Link href="/marketplace" passHref>
        <Button className="bg-green-600 hover:bg-green-700">
          Volver al Marketplace
        </Button>
      </Link>
    </div>
  );
}