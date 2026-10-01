import DashboardLayout from "@/layouts/DashboardLayout";

import StockRequestsTable from "./com/StockRequestsTable";

function StockRequests() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-6xl space-y-5">
        <div>
          <h1 className="text-lg font-semibold">Stock Requests</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            3 pending requests awaiting decision
          </p>
        </div>

        <StockRequestsTable />
      </div>
    </DashboardLayout>
  );
}

export default StockRequests;
