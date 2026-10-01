import { CircleAlert } from "lucide-react";

import { DetailField, RequestProductTable } from "../shared/RequestDetailParts";
import ApproveRequestDialog from "./ApproveRequestDialog";
import RejectRequestDialog from "./RejectRequestDialog";

function PendingRequestDetails({ request }) {
  const hasInsufficientStock = request.products.some(
    (product) => product.available < product.requested,
  );

  return (
    <div className="space-y-4 border-b bg-background px-6 py-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DetailField label="FDO">{request.fdo}</DetailField>
        <DetailField label="Warehouse">{request.warehouse}</DetailField>
        <DetailField label="Route">{request.route}</DetailField>
        <DetailField label="Request Date">{request.requestedDate}</DetailField>
        <DetailField label="Planned Distribution">{request.plannedDistribution}</DetailField>
        <DetailField label="FDO Note" className="sm:col-span-2 lg:col-span-3">
          <span className="italic">{request.note}</span>
        </DetailField>
      </div>

      {hasInsufficientStock ? (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-sm text-red-700">
          <CircleAlert className="mt-0.5 size-4 shrink-0" />
          <p>
            One or more products have insufficient stock. This request cannot be
            approved until stock is replenished.
          </p>
        </div>
      ) : null}

      <RequestProductTable products={request.products} showAvailability />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold">
          Total <span className="ml-4 tabular-nums">{request.totalUnits}</span>
        </p>
        <div className="flex gap-2">
          <RejectRequestDialog request={request} />
          <ApproveRequestDialog request={request} disabled={hasInsufficientStock} />
        </div>
      </div>
    </div>
  );
}

export default PendingRequestDetails;
