'use client';

import { useState, useMemo } from 'react';
import { CryptoData } from '../types';

interface SortConfig {
  key: keyof CryptoData;
  direction: 'asc' | 'desc';
}

export function useTableSort(data: CryptoData[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const handleSort = (key: keyof CryptoData) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const { key, direction } = sortConfig;
      const modifier = direction === 'asc' ? 1 : -1;

      if (a[key] < b[key]) return -1 * modifier;
      if (a[key] > b[key]) return 1 * modifier;
      return 0;
    });
  }, [data, sortConfig]);

  return { sortedData, handleSort };
}