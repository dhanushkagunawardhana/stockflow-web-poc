import React from "react";

import { Sidebar, TopNav } from "@/components/compositions";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-row">
      <Sidebar />

      <div className="w-full">
        <TopNav />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
