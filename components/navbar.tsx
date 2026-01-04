import Link from "next/link";

const Navbar = () => {
  const navlist = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Admin",
      href: "/admin",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center px-10">
      <h1 className="font-bold text-xl">Safe Secure</h1>
      <ul className="flex gap-5 py-5">
        {navlist.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
