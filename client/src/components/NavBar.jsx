import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li className="nav__link bg-danger">
              <Link>Home</Link>
            </li>
            <li className="nav__link">
              <Link>Menu</Link>
            </li>
            <li className="nav__link">
              <Link>About</Link>
            </li>
            <li className="nav__link">
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export { NavBar };
