import {
  BarChart3,
  ClipboardList,
  PackageCheck,
  RotateCcw,
} from "lucide-react";

export const sidebarNavigation = [
  {
    label: "Stock Summary",
    icon: BarChart3,
    isActive: true,
  },
  {
    label: "Stock Requests",
    icon: ClipboardList,
    badge: 3,
  },
  {
    label: "Distribution Runs",
    icon: PackageCheck,
  },
  {
    label: "Return Approvals",
    icon: RotateCcw,
    badge: 2,
  },
];

export const sidebarProfile = {
  name: "Amila Perera",
  role: "Stock Manager",
  warehouse: "Colombo Central Warehouse",
};
