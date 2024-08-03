'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import BrandList from '../brand';

export default function FranchiseLandingPage({ params }: { params: { id: string } }) {
  const brandId = params.id;  // Mantener brandId como cadena
  const brand = BrandList.find(b => b.id === brandId);

  if (!brand) {
    notFound();
  }

  const otherBrands = BrandList.filter(b => b.id !== brandId).slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-2">{brand.name}</h1>
            <p className="text-xl text-gray-400 mb-6">Franquicia de {brand.category}</p>
            <div className="bg-white p-4 rounded-lg mb-8">
              <img src={brand.image} alt={brand.name} className="w-full max-w-md mx-auto h-auto" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Descripción de la Franquicia</h2>
            <p className="mb-4">
              {brand.name} es una franquicia líder en el sector {brand.category.toLowerCase()}. 
              Con una presencia {brand.location}, ofrece una oportunidad de inversión 
              atractiva con un ROI estimado de {brand.roi}. El tiempo de establecimiento 
              típico es de {brand.establishmentTime}, lo que permite una rápida puesta en marcha 
              del negocio.
            </p>
            <p>
              Únete a la familia {brand.name} y sé parte de una marca reconocida y en crecimiento.
            </p>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-gray-800 p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <p className="mb-2"><strong>Teléfono:</strong> +1 234 567 890</p>
              <p className="mb-2"><strong>Email:</strong> info@{brand.name.toLowerCase()}.com</p>
              <p className="mb-4"><strong>Sitio Web:</strong> www.{brand.name.toLowerCase()}.com</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Solicitar Información</button>
            </div>

            <div className="bg-gray-800 p-6 mb-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Detalles de Inversión</h3>
              <p className="mb-2"><strong>Inversión Inicial:</strong> {brand.investment}</p>
              <p className="mb-2"><strong>ROI Estimado:</strong> {brand.roi}</p>
              <p><strong>Tiempo de Establecimiento:</strong> {brand.establishmentTime}</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Solicita Información</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Nombre" className="w-full p-2 bg-gray-700 text-white rounded" />
                <input type="email" placeholder="Email" className="w-full p-2 bg-gray-700 text-white rounded" />
                <input type="text" placeholder="Provincia" className="w-full p-2 bg-gray-700 text-white rounded" />
                <input type="tel" placeholder="Teléfono" className="w-full p-2 bg-gray-700 text-white rounded" />
                <textarea placeholder="Mensaje" className="w-full p-2 bg-gray-700 text-white rounded"></textarea>
                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-sm">
                    Acepto que mis datos sean tratados para atender mi consulta comercial.
                  </label>
                </div>
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded">Enviar</button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Otras franquicias que te recomendamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherBrands.map((brand) => (
              <Link key={brand.id} href={`/marketplace/${brand.id}`}>
                <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg">
                  <img src={brand.image} alt={brand.name} className="w-full h-24 object-contain mb-2" />
                  <p className="text-center font-semibold">{brand.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
