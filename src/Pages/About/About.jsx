import { Link } from "react-router-dom";
import MainBanner from "../../Components/Shared/MainBanner/MainBanner.jsx";
import Testimonial from "../../Components/Testimonial/Testimonial.jsx";
import InstaSection from "../../Components/Shared/InstaSection/InstaSection.jsx";

export default function About() {
  return (
    <div className="position-relative">
      <MainBanner
        title="About Us"
        image="/bg-breadcrumb.png"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "About Us" }]}
        customClass="breadcrumbAbout"
      />

      <div className="container-fluid py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 d-flex flex-column gap-4">
            <h1 className="fw-bold fs-2">Enhancing Your Style</h1>
            <p className="text-secondary fs-6">
              Together with you, enhance your temperament - affirm your
              luxurious beauty with impressive designs...
            </p>
            <Link to="/shop">
              <button className="btn btn-outline-dark rounded-0 px-4 py-2">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="/about-1.png"
              className="img-fluid rounded"
              alt="About 1"
            />
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 d-flex flex-column gap-4">
            <h1 className="fw-bold fs-2">Ensemble with Earrings</h1>
            <p className="text-secondary fs-6">
              Genuine gold and silver jewelry for young people, elegant design,
              diverse designs help you perfect and transform your daily style
            </p>
            <Link to="/shop">
              <button className="btn btn-outline-dark rounded-0 px-4 py-2">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src="/about-2.png"
              className="img-fluid rounded"
              alt="About 2"
            />
          </div>
        </div>
      </div>

      <Testimonial />
      <InstaSection />
    </div>
  );
}
