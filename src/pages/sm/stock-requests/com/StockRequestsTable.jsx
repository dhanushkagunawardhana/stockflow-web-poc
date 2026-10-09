import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { pendingStockRequests } from "@/data/mock/stock-requests";

import PendingRequestsTable from "./pending-request/PendingRequestsTable";
import RequestHistoryTable from "./request-history/RequestHistoryTable";

function StockRequestsTable() {
  const [view, setView] = useState("pending");
  const isPending = view === "pending";

  return (
    <Card className="gap-0 rounded-2xl py-0 shadow-none">
      <CardHeader className="border-b px-4 py-4">
        <div role="tablist" aria-label="Stock request views" className="flex w-fit rounded-xl bg-muted p-1">
          <Button
            type="button"
            role="tab"
            size="sm"
            variant={isPending ? "outline" : "ghost"}
            aria-selected={isPending}
            className={isPending ? "bg-background shadow-sm" : "text-muted-foreground"}
            onClick={() => setView("pending")}
          >
            Pending Requests
            <Badge className="bg-[#f25522] px-1.5 text-white">
              {pendingStockRequests.length}
            </Badge>
          </Button>
          <Button
            type="button"
            role="tab"
            size="sm"
            variant={!isPending ? "outline" : "ghost"}
            aria-selected={!isPending}
            className={!isPending ? "bg-background shadow-sm" : "text-muted-foreground"}
            onClick={() => setView("history")}
          >
            Request History
          </Button>
        </div>
      </CardHeader>

      {isPending ? <PendingRequestsTable /> : <RequestHistoryTable />}
    </Card>
  );
}

export default StockRequestsTable;
