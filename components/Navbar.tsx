import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center px-4 bg-white h-[70px] shadow-md w-full">
      <nav className="container py-2 ">
        <ul className="flex space-x-6 text-lg items-center">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink href="">Github</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

type NavLink = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
  return (
    <Link className="hover:text-gray-300 hover:underline" href={href}>
      {children}
    </Link>
  );
};
