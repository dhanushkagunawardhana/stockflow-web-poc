import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { House } from "lucide-react";

const warehouseList = [
  { label: "All Warehouses", value: "all" },
  { label: "Colombo Central Warehouse", value: "colombo" },
  { label: "Kandy Warehouse", value: "kandy" },
  { label: "Galle Warehouse", value: "galle" },
];

const monthList = [
  { label: "August 2026", value: "2026-08" },
  { label: "July 2026", value: "2026-09" },
  { label: "June 2026", value: "2026-10" },
];

function TopNav() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center gap-2 border-b bg-background px-6">
      <h1 className="font-semibold text-foreground">Page Title</h1>

      <div className="flex items-center gap-3 ml-auto">
        <Select items={warehouseList} defaultValue={"all"}>
          <SelectTrigger className="w-full min-w-60">
            <SelectValue placeholder="Select a Warehouse" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Warehouses</SelectLabel>
              {warehouseList.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select items={monthList} defaultValue={"2026-08"}>
          <SelectTrigger className="w-full min-w-40">
            <SelectValue placeholder="Select a Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Months</SelectLabel>
              {monthList.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </header>
  );
}

export default TopNav;
