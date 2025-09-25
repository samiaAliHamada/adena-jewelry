import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { useAuthStore } from "../../Store/useAuthStore.js";
import "./Footer.css";

export default function Footer() {
  const { user, logout } = useAuthStore();
  return (
    <footer className="py-4 bg-black text-white text-center mt-5">
      <div className="container-fluid">
        <div className="row g-4 py-4">
          <div className="col-md-3 col-sm-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-2">
              <h6 className="fw-bold pb-2">CONTACT US</h6>
              <p className="text-start my-0 opacity-75">
                Tower of London, London EC3N 4AB, United Kingdom.
              </p>
              <a
                href="tel:(+84) 123 567 712"
                className="text-decoration-none text-white opacity-75"
              >
                (+84) 123 567 712
              </a>
              <a
                href="mailto:jewelryshop@gmail.com"
                className="text-decoration-none text-white opacity-75"
              >
                jewelryshop@gmail.com
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-2">
              <h6 className="fw-bold pb-2">CUSTOMER SERVICE</h6>
              <ul className="list-unstyled text-start opacity-75">
                <li>
                  <Link to="/faq" className="text-white text-decoration-none">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    to="/SizeGuide"
                    className="text-white text-decoration-none"
                  >
                    Size guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="text-white text-decoration-none"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-status"
                    className="text-white text-decoration-none"
                  >
                    Order status
                  </Link>
                </li>
                <li>
                  <Link
                    to="/exchanges"
                    className="text-white text-decoration-none"
                  >
                    Exchanges
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-2">
              <h6 className="fw-bold pb-2">ABOUT US</h6>
              <ul className="list-unstyled text-start  opacity-75">
                <li>
                  <Link to="/shop" className="text-white text-decoration-none">
                    Our Shops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artists"
                    className="text-white text-decoration-none"
                  >
                    Artists
                  </Link>
                </li>
                <li>
                  <Link
                    to="/local-giving"
                    className="text-white text-decoration-none"
                  >
                    Local Giving
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-decoration-none">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-3">
              <h6 className="fw-bold pb-2">JOIN OUR COMMUNITY</h6>
              <input
                id="email"
                type="email"
                placeholder="Email address ..."
                className="footer_email form-control bg-black text-white border-0 border-bottom rounded-0 mb-2"
                required
              />
              {user ? (
                <button
                  onClick={logout}
                  className="signup_btn btn px-4 py-2 rounded-0"
                >
                  LOGOUT
                </button>
              ) : (
                <Link to="/register">
                  <button className="signup_btn btn px-4 py-2 rounded-0">
                    SIGN UP
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap pt-3 mt-3">
          <small className="mb-0">
            &copy;2024 - {new Date().getFullYear()} All rights reserved.
          </small>
          <img src="/payment.png" alt="Payment methods" className="img-fluid" />
          <div className="social_icons d-flex gap-3">
            <a
              href="#"
              target="_blank"
              className="d-flex align-items-center justify-content-center text-white border rounded-circle"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              className="d-flex align-items-center justify-content-center text-white border rounded-circle"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              className="d-flex align-items-center justify-content-center text-white border rounded-circle"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              target="_blank"
              className="d-flex align-items-center justify-content-center text-white border rounded-circle"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
