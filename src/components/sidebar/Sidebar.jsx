import { sidebarNavigation, sidebarProfile } from "@/data/nav";

import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarProfile from "./SidebarProfile";

function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-border bg-background lg:flex">
      <SidebarHeader />
      <SidebarNav items={sidebarNavigation} />
      <SidebarProfile profile={sidebarProfile} />
    </aside>
  );
}

export default Sidebar;
