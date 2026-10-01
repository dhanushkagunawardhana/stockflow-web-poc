import {
  DistributionRuns,
  Login,
  ReturnApprovals,
  StockRequests,
  StockSummary,
} from "@/pages";

export const routes = [
  {
    title: "Stock Summary",
    route: "/",
    page: <StockSummary />,
  },
  {
    title: "Login",
    route: "/login",
    page: <Login />,
  },
  {
    title: "Stock Summary",
    route: "/stock-summary",
    page: <StockSummary />,
  },
  {
    title: "Stock Requests",
    route: "/stock-requests",
    page: <StockRequests />,
  },
  {
    title: "Distribution Runs",
    route: "/distribution-runs",
    page: <DistributionRuns />,
  },
  {
    title: "Return Approvals",
    route: "/return-approvals",
    page: <ReturnApprovals />,
  },
];
