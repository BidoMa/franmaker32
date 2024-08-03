import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface FilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const categories = ['All', 'Food', 'Retail', 'Service', 'Fitness'];

const Filter: React.FC<FilterProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
    } else {
      const newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories.filter(c => c !== 'All'), category];
      setSelectedCategories(newCategories.length ? newCategories : ['All']);
    }
  };

  return (
    <div className="flex flex-col space-y-4 mb-8">
      <div className="relative">
        <Input
          placeholder="Buscar franquicia..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full bg-gray-800 text-white border-gray-700 rounded-lg"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1 rounded-full ${
              selectedCategories.includes(category) ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;