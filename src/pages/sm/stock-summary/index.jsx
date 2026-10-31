import { useEffect, useState } from "react";
import { fetchStockSummary } from "@/api/stockSummary";
import SMLayout from "@/layouts/SMLayout";

import GreetingBanner from "./com/GreetingBanner";
import MonthlyStockMovement from "./com/MonthlyStockMovement";
import ProductStock from "./com/ProductStock";
import StockOverview from "./com/StockOverview";
import StockSummaryFilters from "./com/StockSummaryFilters";

function StockSummary() {
  const [warehouse, setWarehouse] = useState("all");
  const [month, setMonth] = useState("2026-08");
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStockSummary({ warehouse, month })
      .then((data) => {
        setSummary(data);
        setError("");
      })
      .catch((requestError) => {
        setSummary(null);
        setError(
          requestError.response?.data?.error ??
            "Could not load stock data. Check that MongoDB and the API server are running.",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [warehouse, month]);

  function changeWarehouse(value) {
    setLoading(true);
    setWarehouse(value);
  }

  function changeMonth(value) {
    setLoading(true);
    setMonth(value);
  }

  return (
    <SMLayout>
      <div className="mx-auto w-full max-w-6xl space-y-5">
        <StockSummaryFilters
          warehouse={warehouse}
          month={month}
          onWarehouseChange={changeWarehouse}
          onMonthChange={changeMonth}
        />
        <GreetingBanner />
        {loading && (
          <p
            role="status"
            className="py-10 text-center text-sm text-muted-foreground"
          >
            Loading stock summary...
          </p>
        )}
        {error && (
          <p
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </p>
        )}
        {!loading && !error && summary && (
          <>
            <StockOverview
              totals={summary.totals}
              warehouse={warehouse}
              month={month}
            />
            <MonthlyStockMovement data={summary.movement} />
            {summary.products.length === 0 ? (
              <p className="rounded-lg border p-6 text-center text-sm text-muted-foreground">
                No stock records for this selection.
              </p>
            ) : (
              <ProductStock products={summary.products} />
            )}
          </>
        )}
      </div>
    </SMLayout>
  );
}

export default StockSummary;
