import React from 'react';
import { CompatibilityItem } from './CompatibilityItem';

const compatibilities = [
  'Binance Compatible',
  'Coinbase Compatible',
  'Blockchain Compatible',
  'Kraken Compatible',
  'Hardware Wallets Compatible',
  'Any Exchange Compatible',
  'Lightning Network Compatible',
  'SegWit Compatible'
];

export function CompatibilityList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 bg-gray-50">
      {compatibilities.map((item) => (
        <CompatibilityItem key={item} text={item} />
      ))}
    </div>
  );
}