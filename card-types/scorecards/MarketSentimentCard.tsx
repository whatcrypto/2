import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Market Sentiment Card Component
interface MarketSentimentCardProps {
  trend: 'bullish' | 'bearish';
  devActivity: number;
  
  sentiment: number;
  label: string;
}

export function MarketSentimentCard({ sentiment, label }: MarketSentimentCardProps) {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Market Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-5xl font-bold">{sentiment}%</p>
          <p className="text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
