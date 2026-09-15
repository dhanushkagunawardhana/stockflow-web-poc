import { cn } from "cn";
import { NavLink } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <div className="w-[500px] h-fit border-2 p-5">
        <NavLink to="/">
          <div
            className={cn({
              "text-2xl font-semibold text-gray-500 text-center pb-3": true,
              "hover:cursor-pointer": true,
            })}
          >
            StockFlow
          </div>
        </NavLink>
        <div>Login</div>
      </div>
    </AuthLayout>
  );
}

export default Login;
