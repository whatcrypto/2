import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { MarketPhase } from '@/types/market';

interface Props {
  phase: MarketPhase;
  className?: string;
}

export function MarketPhaseIndicator({ phase, className }: Props) {
  const getPhaseIcon = () => {
    switch (phase.status) {
      case 'active':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 'inactive':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <Minus className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {getPhaseIcon()}
      <div>
        <h3 className="font-medium text-white">{phase.name}</h3>
        <p className="text-sm text-slate-400">{phase.description}</p>
      </div>
    </div>
  );
}