import { NavLink, useLocation } from "react-router-dom";

function SidebarNavItem({ item }) {
  const { pathname } = useLocation();
  const { activePaths = [item.to], badge, icon: Icon, label, to } = item;
  const isActive = activePaths.includes(pathname);

  return (
    <li>
      <NavLink
        to={to}
        end
        aria-current={isActive ? "page" : undefined}
        className={`flex h-11 w-auto items-center gap-3 whitespace-nowrap rounded-lg px-3 text-left text-sm font-medium transition-colors lg:w-full ${
          isActive
            ? "bg-[#fdf1ed] text-[#a63d1d]"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <Icon aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.8} />
        <span>{label}</span>
        {badge ? (
          <span className="ml-auto inline-flex min-w-5 items-center justify-center rounded-full bg-[#e85d31] px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white">
            {badge}
          </span>
        ) : null}
      </NavLink>
    </li>
  );
}

function SidebarNav({ items }) {
  return (
    <nav aria-label="Primary navigation" className="overflow-x-auto px-3 py-2 lg:overflow-visible lg:py-4">
      <ul className="flex w-max gap-1 lg:block lg:w-auto lg:space-y-1">
        {items.map((item) => (
          <SidebarNavItem key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default SidebarNav;
