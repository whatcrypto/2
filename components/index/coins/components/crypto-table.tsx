'use client';

import { Table } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { columns } from "./table/columns";
import { TableHeaderComponent } from "./table/header";
import { TableBodyComponent } from "./table/body";
import { useCryptoData } from "../hooks/use-crypto-data";
import { useTableSort } from "../hooks/use-table-sort";

export function CryptoTable() {
  const { data, loading, error } = useCryptoData();
  const { sortedData, handleSort } = useTableSort(data);

  if (error) {
    return (
      <Card className="p-6 text-center">
        <p className="text-red-500">Error: {error}</p>
      </Card>
    );
  }

  return (
    <Card className="relative overflow-hidden">
      <Table>
        <TableHeaderComponent columns={columns} onSort={handleSort} />
        <TableBodyComponent 
          data={sortedData} 
          columns={columns} 
          loading={loading} 
        />
      </Table>
    </Card>
  );
}