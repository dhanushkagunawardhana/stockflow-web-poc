import React from "react";

function AuthLayout({ children }) {
  return <div className="min-h-screen bg-muted/50 flex justify-center items-center">{children}</div>;
}

export default AuthLayout;
