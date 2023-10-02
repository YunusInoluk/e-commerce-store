import getCategories from "@/actions/get-categories";
import Link from "next/link";
import MainNav from "./main-nav";
import Container from "./ui/container";
import NavbarAction from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8relative ">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <span className="text-xl font-bold">FakeStore</span>
          </Link>
          <MainNav data={categories} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
