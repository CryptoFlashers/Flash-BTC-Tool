import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { RadioGroup } from '../ui/RadioGroup';

const networks = ['Legacy', 'SegWit', 'Native SegWit', 'Lightning'];

export function SendForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Send BTC</h2>
      <form className="space-y-4">
        <Input
          label="Recipient BTC address"
          type="text"
          placeholder="Enter BTC address"
          defaultValue="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
        />
        
        <Input
          label="Amount BTC"
          type="number"
          defaultValue="0.5"
          step="0.00000001"
        />

        <RadioGroup
          label="Bitcoin Network"
          options={networks}
          name="network"
          defaultValue="SegWit"
        />

        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Send Flash!
        </Button>
      </form>
    </div>
  );
}