import { useState } from 'react';

export type CurrencyType = 'btc' | 'usdt';

export function useCurrencySwitch(initialCurrency: CurrencyType = 'btc') {
  const [active, setActive] = useState<CurrencyType>(initialCurrency);
  
  return {
    active,
    setActive,
    isBitcoin: active === 'btc',
    isUsdt: active === 'usdt'
  };
}