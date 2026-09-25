import { BarChart3 } from "lucide-react";

function SidebarHeader() {
  return (
    <div className="flex h-16 items-center gap-3 border-b border-border px-5">
      <div className="flex size-8 items-center justify-center rounded-lg bg-[#e85d31] text-white shadow-sm">
        <BarChart3 aria-hidden="true" className="size-4" strokeWidth={2.25} />
      </div>

      <div className="leading-tight">
        <p className="text-sm font-semibold text-foreground">StockFlow</p>
        <p className="text-[11px] text-muted-foreground">Distribution System</p>
      </div>
    </div>
  );
}

export default SidebarHeader;
