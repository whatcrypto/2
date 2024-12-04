'use client';

import { Card } from "@/components/ui/card";
import { CoinDetails } from "../types";
import { CoinTable } from "@/components/coin-table/coin-table";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CoinPageClientProps {
  initialData: CoinDetails | null;
}

export function CoinPageClient({ initialData }: CoinPageClientProps) {
  if (!initialData) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-6xl mx-auto">
          <Card className="p-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Coin not found</h2>
              <p className="text-muted-foreground mt-2">The requested cryptocurrency could not be found.</p>
              <Link href="/crypto-table" className="mt-4 inline-block">
                <Button>Return to Crypto Table</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/crypto-table">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <img src={initialData.image.large} alt={initialData.name} className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold">{initialData.name}</h1>
              <p className="text-muted-foreground">{initialData.symbol.toUpperCase()}</p>
            </div>
          </div>
        </div>

        <Card className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4">About {initialData.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: initialData.description.en }} />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Market Data</h2>
          <CoinTable coins={[initialData]} />
        </Card>
      </div>
    </div>
  );
}