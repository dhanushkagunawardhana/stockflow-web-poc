import { useLocation, useNavigate } from "react-router-dom";

import { routes } from "@/data/routes";

import { Button } from "../ui/button";

function TopNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pageTitle = routes.find(({ route }) => route === pathname)?.title;

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center gap-2 border-b bg-background px-6">
      <h1 className="font-semibold text-foreground">{pageTitle}</h1>

      <div className="ml-auto">
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </header>
  );
}

export default TopNav;
