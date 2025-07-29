import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { SlBag } from "react-icons/sl";

import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed-top">
      <nav
        className={`navbar navbar-expand-lg ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-fluid align-items-center">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img
              src="/logo-white.png"
              alt="Adena Brand Logo"
              className="brand_logo"
            />
          </a>
          <div className="collapse navbar-collapse pt-2" id="navbarScroll">
            <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll gap-4">
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
                  About Us
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
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <Link to="/profile" className="text-dark">
              <FaRegUser size={20} />
            </Link>
            <Link to="/wishlist" className="text-dark">
              <FaRegHeart size={20} />
            </Link>
            <Link to="/cart" className="text-dark">
              <SlBag size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
