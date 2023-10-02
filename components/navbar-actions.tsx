"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./ui/button";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <Button className="flex items-center">
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium ml-2">0</span>
      </Button>
    </div>
  );
};

export default NavbarAction;
