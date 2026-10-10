import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fdoStockRequests } from "@/data/mock/fdo-stock-requests";

import ActiveRunAlert from "./ActiveRunAlert";
import StockRequestFilters from "./StockRequestFilters";
import StockRequestsTable from "./StockRequestsTable";

const initialFilters = { query: "", warehouse: "all", status: "all" };

function StockRequestsSection() {
  const [requests, setRequests] = useState(fdoStockRequests);
  const [filters, setFilters] = useState(initialFilters);
  const [expandedRequestId, setExpandedRequestId] = useState(null);
  const activeRequest = requests.find(
    (request) => ["awaiting-collection", "in-progress"].includes(request.runStatus),
  );

  const visibleRequests = useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    return requests.filter((request) =>
      (!query || request.id.toLowerCase().includes(query)) &&
      (filters.warehouse === "all" || request.warehouse === filters.warehouse) &&
      (filters.status === "all" || request.status === filters.status),
    );
  }, [filters, requests]);

  function confirmCollection(requestId) {
    setRequests((current) =>
      current.map((request) =>
        request.id === requestId && request.runStatus === "awaiting-collection"
          ? { ...request, runStatus: "in-progress" }
          : request,
      ),
    );
  }

  function changeFilter(name, value) {
    setFilters((current) => ({ ...current, [name]: value }));
    setExpandedRequestId(null);
  }

  function toggleRequest(requestId) {
    setExpandedRequestId((currentId) =>
      currentId === requestId ? null : requestId,
    );
  }

  return (
    <section aria-labelledby="fdo-stock-requests-heading" className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 id="fdo-stock-requests-heading" className="text-lg font-semibold">
            Stock Requests
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Request stock from a warehouse and track approval status.
          </p>
        </div>
        <Button
          type="button"
          disabled
          title="Resolve your active distribution run before requesting new stock."
          className="bg-[#f25522] text-white"
        >
          <Plus aria-hidden="true" />
          Request Stock
        </Button>
      </div>

      <ActiveRunAlert request={activeRequest} />

      <Card className="gap-0 rounded-xl bg-white py-0 shadow-none">
        <StockRequestFilters filters={filters} onFilterChange={changeFilter} />
        <StockRequestsTable
          requests={visibleRequests}
          expandedRequestId={expandedRequestId}
          onToggleRequest={toggleRequest}
          onConfirmCollection={confirmCollection}
        />
      </Card>
    </section>
  );
}

export default StockRequestsSection;
