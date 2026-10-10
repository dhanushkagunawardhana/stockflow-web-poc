import { useMemo, useState } from "react";

import { Card } from "@/components/ui/card";
import { fdoStockRequests } from "@/data/mock/fdo-stock-requests";

import ActiveRunAlert from "./ActiveRunAlert";
import RequestStockDialog from "./RequestStockDialog";
import StockRequestFilters from "./StockRequestFilters";
import StockRequestsTable from "./StockRequestsTable";

const initialFilters = { query: "", warehouse: "all", status: "all" };

function StockRequestsSection() {
  const [requests, setRequests] = useState(fdoStockRequests);
  const [filters, setFilters] = useState(initialFilters);
  const [expandedRequestKey, setExpandedRequestKey] = useState(null);
  const activeRequest = requests.find(
    (request) => ["awaiting-collection", "in-progress", "return-submitted"].includes(request.runStatus),
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
    setExpandedRequestKey(`${requestId}-in-progress`);
  }

  function submitRequest({ warehouse, requestedAt, note, products }) {
    if (activeRequest) return;

    const nextNumber = Math.max(
      0,
      ...requests.map((request) => Number(request.id.replace("REQ-", "")) || 0),
    ) + 1;
    const newRequest = {
      id: `REQ-${nextNumber}`,
      requestedDate: new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(requestedAt),
      warehouse,
      status: "pending",
      runStatus: null,
      note,
      totalUnits: products.reduce((total, product) => total + product.requested, 0),
      products,
    };

    setRequests((current) => [newRequest, ...current]);
    setFilters(initialFilters);
    setExpandedRequestKey(`${newRequest.id}-none`);
  }

  function changeFilter(name, value) {
    setFilters((current) => ({ ...current, [name]: value }));
    setExpandedRequestKey(null);
  }

  function toggleRequest(requestKey) {
    setExpandedRequestKey((currentKey) =>
      currentKey === requestKey ? null : requestKey,
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
        <RequestStockDialog
          activeRequest={activeRequest}
          onSubmitRequest={submitRequest}
        />
      </div>

      <ActiveRunAlert request={activeRequest} />

      <Card className="gap-0 rounded-xl bg-white py-0 shadow-none">
        <StockRequestFilters filters={filters} onFilterChange={changeFilter} />
        <StockRequestsTable
          requests={visibleRequests}
          expandedRequestKey={expandedRequestKey}
          onToggleRequest={toggleRequest}
          onConfirmCollection={confirmCollection}
        />
      </Card>
    </section>
  );
}

export default StockRequestsSection;
