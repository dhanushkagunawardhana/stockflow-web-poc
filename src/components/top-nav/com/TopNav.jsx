import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { routes } from "@/data/routes";

import ViewSwitchButton from "./ViewSwitchButton";

function TopNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pageTitle = routes.find(({ route }) => route === pathname)?.title;

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center gap-2 border-b bg-background px-3 sm:px-6">
      <h1 className="min-w-0 truncate font-semibold text-foreground">{pageTitle}</h1>

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <ViewSwitchButton />
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </header>
  );
}

export default TopNav;
