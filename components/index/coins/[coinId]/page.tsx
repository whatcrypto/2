import { coinsApi } from '@/lib/api/coins';

import { CoinPageClient } from './client';

export async function generateStaticParams() {
  try {
    const coins = await coinsApi.getMarketCoins();
    return coins.map((coin: { id: string }) => ({
      coinId: coin.id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function CoinPage({ params }: { params: { coinId: string } }) {
  try {
    const initialData = await coinsApi.getCoinDetails(params.coinId);
    const bitcoinData = await coinsApi.getCoinDetails('bitcoin', { market_data: true }); 
    return <CoinPageClient initialData={initialData} />;
  } catch (error) {
    console.error('Error fetching coin data:', error);
    return <div>Error loading coin data</div>;
  }
}

