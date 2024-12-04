'use client';

import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

export function ImportDiagram() {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-3 gap-8 w-full">
          {/* Top Level */}
          <div className="col-span-3 flex justify-center">
            <div className="bg-purple-100 dark:bg-purple-950/50 border-2 border-purple-500 rounded-lg p-4 text-center">
              <span className="font-mono text-sm">page.tsx</span>
              <div className="text-xs text-muted-foreground mt-1">Main Page Component</div>
            </div>
          </div>

          {/* Arrows */}
          <div className="col-span-3 flex justify-center">
            <ArrowDown className="text-purple-500" />
          </div>

          {/* Second Level */}
          <div className="col-span-3 grid grid-cols-3 gap-8">
            <div className="flex justify-center">
              <div className="bg-blue-100 dark:bg-blue-950/50 border-2 border-blue-500 rounded-lg p-4 text-center">
                <span className="font-mono text-sm">types.ts</span>
                <div className="text-xs text-muted-foreground mt-1">Type Definitions</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-green-100 dark:bg-green-950/50 border-2 border-green-500 rounded-lg p-4 text-center">
                <span className="font-mono text-sm">utils.ts</span>
                <div className="text-xs text-muted-foreground mt-1">Helper Functions</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-orange-100 dark:bg-orange-950/50 border-2 border-orange-500 rounded-lg p-4 text-center">
                <span className="font-mono text-sm">crypto-table.tsx</span>
                <div className="text-xs text-muted-foreground mt-1">Table Component</div>
              </div>
            </div>
          </div>

          {/* External Imports */}
          <div className="col-span-3 mt-8">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-3">External Imports</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">UI Components</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="font-mono text-xs">@/components/ui/card</li>
                    <li className="font-mono text-xs">@/components/ui/table</li>
                    <li className="font-mono text-xs">@/components/ui/button</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Icons & Utilities</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="font-mono text-xs">lucide-react</li>
                    <li className="font-mono text-xs">react</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Import Flow Description */}
        <div className="mt-8 text-sm text-muted-foreground">
          <ul className="space-y-2">
            <li>• <span className="font-mono text-purple-500">page.tsx</span> imports and renders the CryptoTable component</li>
            <li>• <span className="font-mono text-orange-500">crypto-table.tsx</span> imports types and utility functions</li>
            <li>• <span className="font-mono text-blue-500">types.ts</span> defines interfaces used throughout the app</li>
            <li>• <span className="font-mono text-green-500">utils.ts</span> provides shared formatting functions</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}