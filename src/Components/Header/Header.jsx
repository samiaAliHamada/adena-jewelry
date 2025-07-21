import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <ul className="nav justify-content-center py-5">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
