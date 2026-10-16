import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarProfile from "./SidebarProfile";

function Sidebar({ header, nav }) {
  return (
    <aside className="flex w-full flex-col border-b border-border bg-background lg:sticky lg:top-0 lg:h-screen lg:w-60 lg:shrink-0 lg:border-b-0 lg:border-r">
      <SidebarHeader header={header} />
      <SidebarNav items={nav} />
      <SidebarProfile />
    </aside>
  );
}

export default Sidebar;
