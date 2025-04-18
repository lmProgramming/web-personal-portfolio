import Link from "next/link";

const NavBar = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a>All rights reserved by Mikołaj Kubś 2025</a>
      <Link className="navbar-brand" href="/">
        Portfolio
      </Link>
    </footer>
  );
};

export default NavBar;
