import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "@/data/routes";

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ page, route }) => (
        <Route key={route} path={route} element={page} />
      ))}
      <Route path="/fdo" element={<Navigate to="/fdo/distributions" replace />} />
      <Route path="/fdo/run-history" element={<Navigate to="/fdo/history" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
