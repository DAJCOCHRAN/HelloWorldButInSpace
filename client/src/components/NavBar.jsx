import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to={"/home"} className="nav-list__link">
                Home
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link">Menu</Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link">About</Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export { NavBar };
