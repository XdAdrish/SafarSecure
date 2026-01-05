import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const navlist = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="sticky top-0 z-50 border-b border-foreground/20 bg-background/50 backdrop-blur-2xl">
      <div className="flex justify-between items-center max-w-5xl mx-auto ">
        <h1 className="font-bold text-xl">Safe Secure</h1>
        <ul className="flex gap-5 py-5 items-center font-semibold">
          {navlist.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
          <div className="flex gap-2">
            <Button size={"sm"} variant={"outline"}>
              Admin Login
            </Button>
            <Link href="/login">
              <Button size={"sm"}>User Login</Button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
