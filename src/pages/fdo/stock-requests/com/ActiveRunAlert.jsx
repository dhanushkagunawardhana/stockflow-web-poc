import { TriangleAlert } from "lucide-react";

import StatusBadge from "./StatusBadge";

function ActiveRunAlert({ request }) {
  if (!request) return null;

  return (
    <div className="flex gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-4 text-amber-900">
      <TriangleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber-600" />
      <div className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold">New stock requests are blocked</p>
          <StatusBadge status={request.runStatus} />
        </div>
        <p className="text-xs text-amber-800">
          You have an approved run awaiting collection. Collect your stock before
          requesting more. <span className="font-mono font-semibold">{request.distributionRun}</span>
        </p>
      </div>
    </div>
  );
}

export default ActiveRunAlert;
