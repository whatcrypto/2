'use client';

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CryptoData, TableColumn } from "../../types";

interface TableBodyProps {
  data: CryptoData[];
  columns: TableColumn[];
  loading: boolean;
}

export function TableBodyComponent({ data, columns, loading }: TableBodyProps) {
  if (loading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} className="text-center">
            Loading...
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id} className="cursor-pointer hover:bg-muted/50">
          {columns.map((column) => (
            <TableCell key={column.key}>
              {column.formatter
                ? column.formatter(row[column.key], row)
                : row[column.key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}