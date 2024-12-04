'use client';

import { MarketOverview } from '@/components/market/MarketOverview';
import { Card } from '@/components/ui/card';

import { CryptoTable } from './coins/components/crypto-table';

export default function CryptoTablePage() {
  return (
    <div className="bg-background min-h-screen p-4 sm:p-6">
      <div className="bg-cyan-500/80 fixed left-0 top-0 px-2 sm:px-4 py-1 sm:py-2 rounded-br-lg text-xs sm:text-sm text-white z-50">
        <span className="font-mono">crypto-table/page.tsx</span>
      </div>

      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <h1 className="font-bold text-2xl sm:text-3xl">Building a Crypto Table</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 relative">
            <div className="absolute -top-2 left-2 sm:left-4">
              <div className="bg-indigo-500 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-sm text-white">
                Import Structure
              </div>
            </div>
            <p className="mb-2 sm:mb-4 text-muted-foreground text-sm sm:text-base">
              Visual representation of how components and utilities are imported
              and connected
            </p>
          </Card>

          <Card className="p-4 sm:p-6 relative">
            <div className="absolute -top-2 left-2 sm:left-4">
              <div className="bg-purple-500 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-sm text-white"></div>
            </div>

            <MarketOverview />
          </Card>

          <Card className="p-4 sm:p-6 relative">
            <div className="absolute -top-2 left-2 sm:left-4">
              <div className="bg-green-500 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-sm text-white">
                Crypto AI Assistant
              </div>
            </div>

            <pre className="bg-muted/30 mt-2 sm:mt-4 overflow-x-auto p-2 sm:p-4 rounded-lg">
              <code>{`// Crypto AI Assistant Component
// app/page.tsx

import { useState } from 'react';

export function CryptoAIAssistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/crypto-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: input,
          context: 'You are a cryptocurrency expert assistant. Provide accurate, up-to-date information about cryptocurrencies, trading, blockchain technology, and market analysis.'
        })
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setResponse('Sorry, there was an error processing your request.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4 rounded-lg bg-card">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 rounded border"
          placeholder="Ask about crypto, markets, or blockchain..."
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Ask Crypto AI'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-3 bg-muted rounded">
          {response}
        </div>
      )}
    </div>
  }`}</code>
            </pre>
          </Card>

          <Card className="p-4 sm:p-6 relative">
            <div className="absolute -top-2 left-2 sm:left-4">
              <div className="bg-yellow-500 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-sm text-white">
                Live Example
              </div>
            </div>
            <p className="mb-2 sm:mb-4 text-muted-foreground text-sm sm:text-base">
              Real-time cryptocurrency data from CoinGecko API with sorting
              capabilities
            </p>
            <CryptoTable />
          </Card>
        </div>

        <div className="bg-blue-500/90 fixed bottom-2 sm:bottom-4 p-2 sm:p-4 right-2 sm:right-4 rounded-lg shadow-lg text-white text-xs sm:text-base">
          <h4 className="font-semibold mb-1 sm:mb-2">Component Structure:</h4>
          <div className="font-mono space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs">
            <div>└─ crypto-table/</div>
            <div>&nbsp;&nbsp; ├─ page.tsx</div>
            <div>&nbsp;&nbsp; ├─ types.ts</div>
            <div>&nbsp;&nbsp; ├─ utils.ts</div>
            <div>&nbsp;&nbsp; └─ components/</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp; ├─ crypto-table.tsx</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp; └─ import-diagram.tsx</div>
          </div>
        </div>
      </div>
    </div>
  );
}
