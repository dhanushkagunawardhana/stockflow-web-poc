import { Badge } from "@/components/ui/badge";

const statusConfig = {
  pending: {
    label: "Pending",
    className: "border-amber-300 bg-amber-50 text-amber-700",
  },
  approved: {
    label: "Approved",
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  rejected: {
    label: "Rejected",
    className: "border-red-200 bg-red-50 text-red-700",
  },
};

function RequestStatusBadge({ status }) {
  const config = statusConfig[status];

  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  );
}

export default RequestStatusBadge;
