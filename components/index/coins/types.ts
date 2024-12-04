export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
}

export interface TableColumn {
  key: keyof CryptoData;
  title: string;
  className?: string;
  formatter?: (value: any, row?: CryptoData) => React.ReactNode;
}

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  description: { en: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    market_cap: { usd: number };
    total_volume: { usd: number };
  };
  image: { large: string };
}