import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { monthOptions, warehouseOptions } from "@/data/mock/stock-summary";

function StockSummaryFilters({ warehouse, month, onWarehouseChange, onMonthChange }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <Select items={warehouseOptions} value={warehouse} onValueChange={onWarehouseChange}>
        <SelectTrigger className="w-full sm:min-w-60 sm:w-auto">
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

      <Select items={monthOptions} value={month} onValueChange={onMonthChange}>
        <SelectTrigger className="w-full sm:min-w-40 sm:w-auto">
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
  );
}

export default StockSummaryFilters;
