import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "@/data/routes";

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ page, route }) => (
        <Route key={route} path={route} element={page} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
