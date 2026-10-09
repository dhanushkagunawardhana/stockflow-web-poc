import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarProfile from "./SidebarProfile";

function Sidebar({ header, nav, profile }) {
  return (
    <aside className="sticky top-0 h-screen w-60 shrink-0 flex-col border-r border-border bg-background lg:flex">
      <SidebarHeader header={header} />
      <SidebarNav items={nav} />
      <SidebarProfile profile={profile} />
    </aside>
  );
}

export default Sidebar;
