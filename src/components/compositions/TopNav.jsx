import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

import { House } from "lucide-react";

function TopNav() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-300 w-full h-[50px] flex flex-row justify-between items-center px-2">
      <div>
        <House />
      </div>

      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  );
}

export default TopNav;
