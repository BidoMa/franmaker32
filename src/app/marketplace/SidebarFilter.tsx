import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import * as RadioGroup from '@radix-ui/react-radio-group';

interface SidebarFilterProps {
  investmentRange: [number, number];
  setInvestmentRange: (range: [number, number]) => void;
  roiRange: string;
  setRoiRange: (range: string) => void;
  establishmentTime: string;
  setEstablishmentTime: (time: string) => void;
}

const defaultInvestmentRange: [number, number] = [50000, 1800000];
const defaultRoiRange = '';
const defaultEstablishmentTime = '';

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  investmentRange,
  setInvestmentRange,
  roiRange,
  setRoiRange,
  establishmentTime,
  setEstablishmentTime
}) => {
  const resetFilters = () => {
    setInvestmentRange(defaultInvestmentRange);
    setRoiRange(defaultRoiRange);
    setEstablishmentTime(defaultEstablishmentTime);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg sidebar-filter w-full md:w-64">
      <h2 className="text-xl font-bold text-white mb-4">Filtros</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Rango de Inversión</h3>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={investmentRange}
          onValueChange={setInvestmentRange}
          min={50000}
          max={2500000}
          step={50000}
        >
          <Slider.Track className="bg-gray-600 relative grow rounded-full h-1">
            <Slider.Range className="absolute bg-green-500 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-5 h-5 bg-white rounded-full hover:bg-green-500 focus:outline-none focus:shadow-outline" />
          <Slider.Thumb className="block w-5 h-5 bg-white rounded-full hover:bg-green-500 focus:outline-none focus:shadow-outline" />
        </Slider.Root>
        <div className="flex justify-between text-gray-400 mt-2">
          <span>${investmentRange[0].toLocaleString()}</span>
          <span>${investmentRange[1].toLocaleString()}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">ROI</h3>
        <RadioGroup.Root value={roiRange} onValueChange={setRoiRange} className="flex flex-col space-y-2">
          <div className="flex items-center">
            <RadioGroup.Item value="0-10" id="r1" className="w-4 h-4 rounded-full border border-gray-400 mr-2" />
            <label htmlFor="r1" className="text-gray-300">0-10%</label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item value="10-20" id="r2" className="w-4 h-4 rounded-full border border-gray-400 mr-2" />
            <label htmlFor="r2" className="text-gray-300">10-20%</label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item value="20+" id="r3" className="w-4 h-4 rounded-full border border-gray-400 mr-2" />
            <label htmlFor="r3" className="text-gray-300">20%+</label>
          </div>
        </RadioGroup.Root>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Tiempo de Establecimiento</h3>
        <RadioGroup.Root value={establishmentTime} onValueChange={setEstablishmentTime} className="flex flex-col space-y-2">
          <div className="flex items-center">
            <RadioGroup.Item value="0-6" id="t1" className="w-4 h-4 rounded-full border border-gray-400 mr-2" />
            <label htmlFor="t1" className="text-gray-300">0-6 meses</label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item value="6-12" id="t2" className="w-4 h-4 rounded-full border border-gray-400 mr-2" />
            <label htmlFor="t2" className="text-gray-300">6-12 meses</label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item value="12+" id="t3" className="w-4 h-4 rounded-full border border-gray-400 mr-2" />
            <label htmlFor="t3" className="text-gray-300">12+ meses</label>
          </div>
        </RadioGroup.Root>
      </div>

      <button 
        onClick={resetFilters} 
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
      >
        Resetear Filtros
      </button>
    </div>
  );
};

export default SidebarFilter;
