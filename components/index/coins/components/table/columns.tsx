'use client';

import { TableColumn } from '../../types';
import { formatCurrency, formatLargeNumber, formatPercentage } from '../../utils';
import Link from 'next/link';

export const columns: TableColumn[] = [
  {
    key: 'name',
    title: 'Name',
    formatter: (value: string, row) => (
      <Link href={`/crypto-table/${row.id}`} className="flex items-center gap-2 hover:text-primary transition-colors">
        <img src={row.image} alt={value} className="w-6 h-6" />
        <span className="font-medium">{value}</span>
        <span className="text-muted-foreground">{row.symbol.toUpperCase()}</span>
      </Link>
    ),
  },
  {
    key: 'current_price',
    title: 'Price',
    formatter: (value: number) => formatCurrency(value),
  },
  {
    key: 'price_change_percentage_24h',
    title: '24h Change',
    formatter: (value: number) => (
      <span className={value >= 0 ? 'text-green-500' : 'text-red-500'}>
        {formatPercentage(value)}
      </span>
    ),
  },
  {
    key: 'market_cap',
    title: 'Market Cap',
    formatter: (value: number) => formatLargeNumber(value),
  },
  {
    key: 'total_volume',
    title: 'Volume (24h)',
    formatter: (value: number) => formatLargeNumber(value),
  },
];