import DashboardLayout from "@/layouts/DashboardLayout";

import GreetingBanner from "./com/GreetingBanner";
import MonthlyStockMovement from "./com/MonthlyStockMovement";
import ProductStock from "./com/ProductStock";
import StockOverview from "./com/StockOverview";
import StockSummaryFilters from "./com/StockSummaryFilters";

function StockSummary() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-6xl space-y-5">
        <StockSummaryFilters />
        <GreetingBanner />
        <StockOverview />
        <MonthlyStockMovement />
        <ProductStock />
      </div>
    </DashboardLayout>
  );
}

export default StockSummary;
