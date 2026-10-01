import { useLocation, useNavigate } from "react-router-dom";

import { monthOptions, warehouseOptions } from "@/data/mock/stock-summary";
import { routes } from "@/data/routes";

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

function TopNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pageTitle = routes.find(({ route }) => route === pathname)?.title;

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center gap-2 border-b bg-background px-6">
      <h1 className="font-semibold text-foreground">{pageTitle}</h1>

      <div className="flex items-center gap-3 ml-auto">
        <Select items={warehouseOptions} defaultValue={"all"}>
          <SelectTrigger className="w-full min-w-60">
            <SelectValue placeholder="Select a Warehouse" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Warehouses</SelectLabel>
              {warehouseOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select items={monthOptions} defaultValue={"2026-08"}>
          <SelectTrigger className="w-full min-w-40">
            <SelectValue placeholder="Select a Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Months</SelectLabel>
              {monthOptions.map((item) => (
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
