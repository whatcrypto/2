import { CoinData } from '@/components/coinData'; // Import coin data

interface TokenScoreCardsProps {
  coins: CoinData[];
}

// export default function Dashboard() {
interface CoinData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  score: number;
  marketCap: number;
}


export function TokenScoreCards() {
  const coins: CoinData[] = [
    {
      id: "bitcoin",
      name: "Bitcoin", 
      symbol: "BTC",
      price: 25000,
      score: 97,
      marketCap: 450000000000,
    }