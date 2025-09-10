import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { SlBag } from "react-icons/sl";
import { useAuthStore } from "../../Store/useAuthStore";
import { useCartStore } from "../../Store/useCartStore";
import CartSidebar from "../CartSidebar/CartSidebar";

import "./Header.css";
import { useWishlistStore } from "../../Store/WishlistStore";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { user, logout } = useAuthStore();
  const { cart } = useCartStore();
  const { wishlist } = useWishlistStore();

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
            <button className="btn position-relative">
              <Link to="/wishlist" className="text-dark">
                <FaRegHeart size={22} />
                {wishlist.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </button>
            <button
              className="btn position-relative"
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-controls="offcanvasCart"
            >
              <SlBag size={22} />
              {cart.length > 0 && (
                <span className="position-absolute top-0  start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </button>

            {user ? (
              <div className="d-flex align-items-center gap-2">
                <button
                  onClick={logout}
                  className="btn btn-sm btn-outline-dark rounded-0"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-dark">
                <button className="btn btn-sm btn-outline-dark rounded-0">
                  {" "}
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
