'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Filter from './Filter';
import SidebarFilter from './SidebarFilter';
import BrandList from './brand';
import './styles.css';

// Define una interfaz para el tipo de datos de brand
interface Brand {
  id: string;
  name: string;
  image: string;
  category: string;
  investment: string;
  roi: string;
  establishmentTime: string;
}

// Actualiza la función BrandCard para usar la interfaz definida
function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
        <p className="text-sm mb-2">Category: {brand.category}</p>
        <p className="text-sm mb-2">Investment: {brand.investment}</p>
        <p className="text-sm mb-2">ROI: {brand.roi}</p>
        <p className="text-sm mb-2">Establishment Time: {brand.establishmentTime}</p>
        <Link href={`/marketplace/${brand.id}`} passHref>
          <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
            Ver más
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function EnhancedFranchiseMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [selectedInvestmentRange, setSelectedInvestmentRange] = useState<[number, number]>([50000, 1800000]);
  const [roiRange, setRoiRange] = useState('');
  const [establishmentTime, setEstablishmentTime] = useState('');

  const filteredBrands = useMemo(() => {
    return BrandList.filter((brand) => {
      const nameMatch = brand.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategories.includes('All') || selectedCategories.includes(brand.category);
      const investmentMatch =
        parseFloat(brand.investment.split(' - ')[0].replace('$', '').replace(',', '')) >= selectedInvestmentRange[0] &&
        parseFloat(brand.investment.split(' - ')[1].replace('$', '').replace(',', '')) <= selectedInvestmentRange[1];
      const roiMatch = !roiRange || (roiRange === '20+' ? parseFloat(brand.roi) >= 20 : brand.roi.includes(roiRange));
      const timeMatch = !establishmentTime || brand.establishmentTime.includes(establishmentTime);
      return nameMatch && categoryMatch && investmentMatch && roiMatch && timeMatch;
    });
  }, [searchTerm, selectedCategories, selectedInvestmentRange, roiRange, establishmentTime]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />
      <div className="container mx-auto py-8 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Franchise Marketplace</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <SidebarFilter
            investmentRange={selectedInvestmentRange}
            setInvestmentRange={setSelectedInvestmentRange}
            roiRange={roiRange}
            setRoiRange={setRoiRange}
            establishmentTime={establishmentTime}
            setEstablishmentTime={setEstablishmentTime}
          />

          <div className="flex-1">
            <Filter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="bg-gray-800 p-1 rounded-lg">
                <TabsTrigger value="all" className="data-[state=active]:bg-green-600">All Franchises</TabsTrigger>
                <TabsTrigger value="featured" className="data-[state=active]:bg-green-600">Featured</TabsTrigger>
                <TabsTrigger value="new" className="data-[state=active]:bg-green-600">New Opportunities</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBrands.map((brand) => (
                    <BrandCard key={brand.id} brand={brand} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="featured">
                <p className="text-center text-gray-400">Contenido de franquicias destacadas aquí</p>
              </TabsContent>
              <TabsContent value="new">
                <p className="text-center text-gray-400">Contenido de nuevas oportunidades aquí</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
