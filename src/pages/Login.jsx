import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Eye, EyeOff, ChartColumn } from "lucide-react";

import AuthLayout from "@/layouts/AuthLayout";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Login form:", form);

    // Replace this with your API login request.
    // If login succeeds:
    navigate("/");
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md px-4">
        <NavLink to="/" className="mb-6 flex items-center justify-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-lg bg-orange-500 text-white">
            <ChartColumn className="size-5" />
          </span>

          <div>
            <p className="text-xl font-semibold leading-none text-foreground">
              StockFlow
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Distribution System
            </p>
          </div>
        </NavLink>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Login</CardTitle>

            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="manager@stockflow.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>

                  <NavLink
                    to="/forgot-password"
                    className="text-xs font-medium text-orange-600 hover:underline"
                  >
                    Forgot password?
                  </NavLink>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="pr-10"
                    required
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword((current) => !current)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Sign in
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}

export default Login;
