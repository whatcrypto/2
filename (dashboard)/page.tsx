import { MarketOverview } from '@/components/market/MarketOverview';

export default function HomePage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Market Overview</h1>
      <MarketOverview />
    </div>
  );
} 