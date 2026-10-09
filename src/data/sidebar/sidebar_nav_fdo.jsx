import {
  ClipboardList,
  History,
  Truck,
} from "lucide-react";

export const sidebarNavFDO = [
  {
    label: "Stock Requests",
    icon: ClipboardList,
    to: "/fdo/stock-requests",
  },
  {
    label: "Distributions",
    icon: Truck,
    to: "/fdo/distributions",
  },
  {
    label: "Run History",
    icon: History,
    to: "/fdo/history",
  },
];

export const sidebarHeaderFDO = {
  title: "StockFlow",
  subtitle: "FDO Portal",
};

export const sidebarProfileFDO = {
  name: "Kasun Perera",
  role: "Field Distribution Officer",
  detail: "kasun.perera@example.com",
};
