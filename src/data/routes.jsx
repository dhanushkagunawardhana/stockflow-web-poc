import {
  DistributionRuns,
  Login,
  ReturnApprovals,
  SignUp,
  StockRequests,
  StockSummary,
} from "@/pages";

import * as Pages from "@/pages";

export const routes = [
  // Auth
  {
    title: "Login",
    route: "/login",
    page: <Login />,
  },
  {
    title: "Sign up",
    route: "/sign-up",
    page: <SignUp />,
  },

  // Stock Manager
  {
    title: "Stock Summary",
    route: "/",
    page: <StockSummary />,
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

  // FDO
  {
    title: "Stock Requests",
    route: "/fdo",
    page: <Pages.FDOStockRequests />,
  },
  {
    title: "Stock Requests",
    route: "/fdo/stock-requests",
    page: <Pages.FDOStockRequests />,
  },
  {
    title: "Distributions",
    route: "/fdo/distributions",
    page: <Pages.FDODistributions />,
  },
  {
    title: "Run History",
    route: "/fdo/history",
    page: <Pages.FDORunHistory />,
  },
];
