"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./ui/button";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <Button
        className="flex items-center"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-medium ml-2">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarAction;
