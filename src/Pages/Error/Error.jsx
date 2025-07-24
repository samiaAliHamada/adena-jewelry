import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Error.css";

export default function Error() {
  return (
    <div className="container">
      <div className="error_msg d-flex flex-column align-items-center justify-content-center gap-3">
        <img src="/the404.png" alt="404 Not Found" className="img-fluid py-3" />
        <h1 className="fw-bold position-relative py-5">
          Oops! That page can't be found.
        </h1>
        <p className="text-secondary text-center">
          We're really sorry but we can't seem to find the page you were looking
          for.
        </p>
        <Link to="/" className="text-decoration-none">
          <button className="btn text-white bg-black rounded-0 px-5 py-2 d-flex align-items-center gap-2">
            Back To Home Page <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
