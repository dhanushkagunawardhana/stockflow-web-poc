import FDOLayout from "@/layouts/FDOLayout";

import StockRequestsSection from "./com/StockRequestsSection";
import StockSummaryCards from "./com/StockSummaryCards";

function FDOStockRequests() {
  return (
    <FDOLayout>
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <StockSummaryCards />
        <StockRequestsSection />
      </div>
    </FDOLayout>
  );
}

export default FDOStockRequests;
