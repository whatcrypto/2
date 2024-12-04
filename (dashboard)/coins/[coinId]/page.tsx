import { CoinPageClient } from '@/components/coins/[coinId]/client';

async function getCoinData(coinId: string) {
  // Implement your data fetching logic here
  return null;
}

export default async function CoinPage({ 
  params 
}: { 
  params: { coinId: string } 
}) {
  const coinData = await getCoinData(params.coinId);
  return <CoinPageClient initialData={coinData} />;
} 