import React from 'react';
import { useMarketData } from '@/src/hooks/useMarketData';
import { MarketPhaseIndicator } from './analysis/MarketPhaseIndicator';

export function MarketOverview() {
  const { metrics, insights, phase, isLoading, error } = useMarketData();

  if (isLoading) {
    return <div>Loading market data...</div>;
  }

  if (error) {
    return <div>Error loading market data: {error.message}</div>;
  }

  return (
    <div className="grid gap-6">
      {phase && <MarketPhaseIndicator phase={phase} />}

      {metrics && (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-800 rounded-lg">
            <h3 className="text-sm font-medium text-slate-400">Volatility</h3>
            <p className="mt-1 text-2xl font-semibold text-white">
              {metrics.volatility}
            </p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg">
            <h3 className="text-sm font-medium text-slate-400">Momentum</h3>
            <p className="mt-1 text-2xl font-semibold text-white">
              {metrics.momentum}
            </p>
          </div>
        </div>
      )}

      {insights && (
        <div className="p-4 bg-slate-800 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400">
            Network Activity
          </h3>
          <p className="mt-1 text-lg text-white">
            {insights.networkMetrics.transactionsPerDay.toLocaleString()}{' '}
            transactions/day
          </p>
          <p className="mt-1 text-sm text-slate-400">
            {insights.networkMetrics.activeNodes.toLocaleString()} active nodes
          </p>
        </div>
      )}
    </div>
  );
}
