import { ArrowLeftRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

function ViewSwitchButton() {
  const { pathname } = useLocation();
  const isFdoView = pathname.startsWith("/fdo");

  return (
    <Button
      type="button"
      variant="outline"
      aria-label={`Switch to ${isFdoView ? "Warehouse" : "FDO"} view`}
      title={`Switch to ${isFdoView ? "Warehouse" : "FDO"} view`}
      onClick={() => window.location.replace(isFdoView ? "/" : "/fdo")}
      className="gap-2 rounded-lg border-border bg-white px-2.5 text-sm font-semibold text-slate-700 shadow-none hover:bg-muted/40"
    >
      <span aria-hidden="true" className="size-2.5 rounded-full bg-[#f25522]" />
      <span className="hidden sm:inline">{isFdoView ? "FDO view" : "SM view"}</span>
      <span className="sm:hidden">{isFdoView ? "FDO" : "SM"}</span>
      <ArrowLeftRight aria-hidden="true" className="size-4" />
    </Button>
  );
}

export default ViewSwitchButton;
