// components/cards/TopPerformersCard.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

}
interface TopPerformersCardProps {
  performers: { name: string; percentage: number }[];
}

export function TopPerformersCard({ performers }: TopPerformersCardProps) {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Top Performers</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {performers.map((coin, index) => (
            <li key={index} className="flex justify-between">
              <span>{coin.name}</span>
              <span className={coin.percentage >= 0 ? "text-green-500" : "text-red-500"}>
                {coin.percentage}%
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}