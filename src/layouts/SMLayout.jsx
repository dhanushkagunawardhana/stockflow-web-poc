import React from "react";

import { Sidebar, TopNav } from "@/components/compositions";

import {
  sidebarHeaderSM,
  sidebarNavSM,
  sidebarProfileSM,
} from "@/data/sidebar/sidebar_nav_sm";

function SMLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-row bg-muted/30">
      <Sidebar
        header={sidebarHeaderSM}
        nav={sidebarNavSM}
        profile={sidebarProfileSM}
      />

      <div className="min-w-0 flex-1">
        <TopNav />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default SMLayout;
