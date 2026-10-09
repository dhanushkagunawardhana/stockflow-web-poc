import {
  BarChart3,
  ClipboardList,
  PackageCheck,
  RotateCcw,
} from "lucide-react";

export const sidebarNavSM = [
  {
    label: "Stock Summary",
    icon: BarChart3,
    to: "/stock-summary",
    activePaths: ["/", "/stock-summary"],
  },
  {
    label: "Stock Requests",
    icon: ClipboardList,
    to: "/stock-requests",
    badge: 3,
  },
  {
    label: "Distribution Runs",
    icon: PackageCheck,
    to: "/distribution-runs",
  },
  {
    label: "Return Approvals",
    icon: RotateCcw,
    to: "/return-approvals",
    badge: 2,
  },
];

export const sidebarHeaderSM = {
  title: "StockFlow",
  subtitle: "Distribution System",
};

export const sidebarProfileSM = {
  name: "Amila Perera",
  role: "Stock Manager",
  detail: "Colombo Central Warehouse",
};
