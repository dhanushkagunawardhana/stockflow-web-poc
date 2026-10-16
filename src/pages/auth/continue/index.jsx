import { useUser } from "@clerk/react";
import { Navigate } from "react-router-dom";

import { homeByRole } from "@/data/access";

function AuthContinue() {
  const { user } = useUser();
  const home = homeByRole[user?.publicMetadata?.role];

  return <Navigate to={home || "/access-pending"} replace />;
}

export default AuthContinue;
