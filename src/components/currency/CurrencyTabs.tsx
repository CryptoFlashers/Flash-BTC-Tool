import React from 'react';
import { BitcoinIcon } from '../icons/BitcoinIcon';
import { TetherIcon } from '../icons/TetherIcon';
import { useCurrencySwitch } from './useCurrencySwitch';
import { cn } from '../../utils/styles';

export function CurrencyTabs() {
  const { active, setActive } = useCurrencySwitch();
  
  return (
    <div className="flex border-b">
      <CurrencyTab
        isActive={active === 'btc'}
        onClick={() => setActive('btc')}
        icon={<BitcoinIcon className="w-5 h-5" />}
        name="Bitcoin"
        activeColor="orange"
      />
      <CurrencyTab
        isActive={active === 'usdt'}
        onClick={() => setActive('usdt')}
        icon={<TetherIcon className="w-5 h-5" />}
        name="USDT"
        activeColor="emerald"
      />
    </div>
  );
}

interface CurrencyTabProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  name: string;
  activeColor: 'orange' | 'emerald';
}

function CurrencyTab({ isActive, onClick, icon, name, activeColor }: CurrencyTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-6 py-3',
        isActive 
          ? `border-b-2 border-${activeColor}-500 text-${activeColor}-600` 
          : 'text-gray-500'
      )}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
}