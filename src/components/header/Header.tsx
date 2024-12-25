import React from 'react';
import { BitcoinIcon } from '../icons/BitcoinIcon';
import { Stats } from './Stats';

export function Header() {
  return (
    <div className="flex items-center justify-between bg-white p-4 border-b">
      <div className="flex items-center gap-4">
        <BitcoinIcon className="w-12 h-12" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Flash BTC Sender</h1>
          <p className="text-sm text-gray-600">Send BTC into Bitcoin Blockchain</p>
        </div>
      </div>
      <Stats />
    </div>
  );
}