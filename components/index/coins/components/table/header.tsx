'use client';

import { Button } from "@/components/ui/button";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";
import { CryptoData, TableColumn } from "../../types";

interface TableHeaderProps {
  columns: TableColumn[];
  onSort: (key: keyof CryptoData) => void;
}

export function TableHeaderComponent({ columns, onSort }: TableHeaderProps) {
  return (
    <TableHeader>
      <TableRow>
        {columns.map((column) => (
          <TableHead key={column.key}>
            <Button
              variant="ghost"
              onClick={() => onSort(column.key)}
              className="flex items-center gap-2"
            >
              {column.title}
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}