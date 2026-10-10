import { X } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ConfirmCollectionDialog from "./ConfirmCollectionDialog";
import StatusBadge from "./StatusBadge";

function DetailField({ label, children }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-foreground">{children}</div>
    </div>
  );
}

function StockRequestDetails({ request, onConfirmCollection }) {
  const isPending = request.status === "pending";
  const isRejected = request.status === "rejected";
  const isAwaitingCollection = request.runStatus === "awaiting-collection";

  return (
    <div className="space-y-5 border-b bg-white px-5 py-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DetailField label="Request ID">
          <span className="font-mono">{request.id}</span>
        </DetailField>
        <DetailField label="Warehouse">{request.warehouse}</DetailField>
        <DetailField label="Request Date">{request.requestedDate}</DetailField>
        <DetailField label="Status"><StatusBadge status={request.status} /></DetailField>
        {!isPending ? (
          <>
            <DetailField label="Decision Date">{request.decisionDate}</DetailField>
            <DetailField label="Decided By">{request.decidedBy}</DetailField>
          </>
        ) : null}
        {!isPending && !isRejected ? (
          <>
            <DetailField label="Distribution Run">
              <span className="font-mono">{request.distributionRun}</span>
            </DetailField>
            <DetailField label="Run Status"><StatusBadge status={request.runStatus} /></DetailField>
          </>
        ) : null}
      </div>

      {isRejected ? (
        <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          <X aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <div className="text-xs">
            <p className="font-semibold">Rejection Reason</p>
            <p className="mt-0.5">{request.rejectionReason}</p>
          </div>
        </div>
      ) : null}

      <div>
        <p className="text-xs text-muted-foreground">Request Note</p>
        <p className="mt-0.5 text-sm italic text-foreground">{request.note}</p>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Products
        </h3>
        <Table className="min-w-150 text-xs">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="px-0">Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead className="text-right">Requested Qty</TableHead>
              <TableHead className="text-right">Warehouse Availability</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {request.products.map((product) => (
              <TableRow key={product.sku} className="hover:bg-transparent">
                <TableCell className="px-0 font-medium">{product.name}</TableCell>
                <TableCell className="font-mono text-[11px] text-muted-foreground">
                  {product.sku}
                </TableCell>
                <TableCell className="text-right font-semibold tabular-nums">
                  {product.requested.toLocaleString("en-US")}
                </TableCell>
                <TableCell className="text-right tabular-nums text-muted-foreground">
                  {product.available.toLocaleString("en-US")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {isAwaitingCollection ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
          <p className="text-xs text-emerald-800">
            Your stock request has been approved. Visit{" "}
            <strong>{request.warehouse}</strong> to collect the stock and confirm pickup.
          </p>
          <ConfirmCollectionDialog
            request={request}
            onConfirmCollection={onConfirmCollection}
          />
        </div>
      ) : null}
    </div>
  );
}

export default StockRequestDetails;
