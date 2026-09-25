import React from "react";

import { Sidebar, TopNav } from "@/components/compositions";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-row bg-muted/30">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <TopNav />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
