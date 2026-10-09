import React from "react";

import { Sidebar, TopNav } from "@/components/compositions";

import {
  sidebarHeaderFDO,
  sidebarNavFDO,
  sidebarProfileFDO,
} from "@/data/sidebar/sidebar_nav_fdo";

function FDOLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-row bg-muted/30">
      <Sidebar
        header={sidebarHeaderFDO}
        nav={sidebarNavFDO}
        profile={sidebarProfileFDO}
      />

      <div className="min-w-0 flex-1">
        <TopNav />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default FDOLayout;
