import { CryptoTable } from '@/components/coins/components/crypto-table';

export default function CoinsPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Cryptocurrency List</h1>
      <CryptoTable />
    </div>
  );
} 