"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname.includes(route.id),
  }));
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      {routes?.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "font-medium text-sm transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-600"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
