import MarketCardSections from '@/components/cardsections/cardSectoion';
import {
  SectorAnalysisCard,
} from '@/components/cardsections/SectorAnalysisCard';

export default function MarketPage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Market Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectorAnalysisCard />
        <MarketCardSections 
          title="Top Gainers"
          data={[]} // Add your data here
        />
      </div>z
    </div>
  );
}   </div>
  );
} 