import { Fragment } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import StatusBadge from "./StatusBadge";
import StockRequestDetails from "./StockRequestDetails";

function StockRequestsTable({ requests, expandedRequestId, onToggleRequest }) {
  function handleRowKeyDown(event, requestId) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggleRequest(requestId);
    }
  }

  return (
    <Table className="min-w-215 text-xs">
      <TableHeader className="bg-muted/40 text-muted-foreground">
        <TableRow className="hover:bg-transparent">
          <TableHead className="px-4">Request ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Warehouse</TableHead>
          <TableHead className="text-right">Products</TableHead>
          <TableHead className="text-right">Total Units</TableHead>
          <TableHead>Request Status</TableHead>
          <TableHead>Run Status</TableHead>
          <TableHead className="w-12"><span className="sr-only">Expand request</span></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.length === 0 ? (
          <TableRow className="hover:bg-white">
            <TableCell colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
              No stock requests match these filters.
            </TableCell>
          </TableRow>
        ) : (
          requests.map((request) => {
            const isExpanded = expandedRequestId === request.id;
            const detailsId = `fdo-request-details-${request.id}`;

            return (
              <Fragment key={request.id}>
                <TableRow
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  className="cursor-pointer bg-white focus-visible:bg-muted/50 focus-visible:outline-none"
                  onClick={() => onToggleRequest(request.id)}
                  onKeyDown={(event) => handleRowKeyDown(event, request.id)}
                >
                  <TableCell className="px-4 font-mono text-[11px] font-semibold text-[#e94713]">
                    {request.id}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{request.requestedDate}</TableCell>
                  <TableCell className="text-muted-foreground">{request.warehouse}</TableCell>
                  <TableCell className="text-right tabular-nums">{request.products.length}</TableCell>
                  <TableCell className="text-right font-semibold tabular-nums">
                    {request.totalUnits.toLocaleString("en-US")}
                  </TableCell>
                  <TableCell><StatusBadge status={request.status} /></TableCell>
                  <TableCell><StatusBadge status={request.runStatus} /></TableCell>
                  <TableCell>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${request.id}`}
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      onClick={(event) => {
                        event.stopPropagation();
                        onToggleRequest(request.id);
                      }}
                    >
                      {isExpanded ? <ChevronDown /> : <ChevronRight />}
                    </Button>
                  </TableCell>
                </TableRow>
                {isExpanded ? (
                  <TableRow id={detailsId} className="hover:bg-white">
                    <TableCell colSpan={8} className="p-0 whitespace-normal">
                      <StockRequestDetails request={request} />
                    </TableCell>
                  </TableRow>
                ) : null}
              </Fragment>
            );
          })
        )}
      </TableBody>
    </Table>
  );
}

export default StockRequestsTable;
