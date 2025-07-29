import { Link } from "react-router-dom";
import MainBanner from "../../Components/Shared/MainBanner/MainBanner.jsx";
import Testimonial from "../../Components/Testimonial/Testimonial.jsx";
import InstaSection from "../../Components/Shared/InstaSection/InstaSection.jsx";
import "./About.css";

export default function About() {
  return (
    <>
      <MainBanner
        title="About Us"
        image="/bg-breadcrumb.png"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "About Us" }]}
      />
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-5">
              <h1>Enhancing Your Style</h1>
              <p>
                Together with you, enhance your temperament - affirm your
                luxurious beauty with impressive designs...
              </p>
              <Link to="/shop">
                <button className="btn btn-outline-dark rounded-0 px-4 py-2">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 p-0 p-sm-2">
            <div>
              <img src="/about-1.png" className="img-fluid" />
            </div>
          </div>

          <div className="col-md-6 p-0 p-sm-2">
            <div>
              <img src="/about-2.png" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-start justify-content-center gap-5">
              <h1>Ensemble with Earrings</h1>
              <p>
                Genuine gold and silver jewelry for young people, elegant
                design, diverse designs help you perfect and transform your
                daily style
              </p>
              <Link to="/shop">
                <button className="btn btn-outline-dark rounded-0 px-4 py-2">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Testimonial />
      </div>
      <InstaSection />
    </>
  );
}
