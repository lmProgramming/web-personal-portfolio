import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" href="/">
        Portfolio
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/#about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/#projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
