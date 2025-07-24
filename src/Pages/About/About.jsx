import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import MainBanner from "../../Components/Shared/MainBanner/MainBanner.jsx";
import Testimonial from "../../Components/Testimonial/Testimonial.jsx";
import "./About.css";

const instaImages = [
  "/insta-1.png",
  "/insta-2.png",
  "/insta-3.png",
  "/insta-4.png",
];

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
      <div className="instagram_section py-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center gap-2">
            <h3>Our Instagram</h3>
            <a href="#" className="instagram_link text-decoration-none">
              #ADENASHOP
            </a>
          </div>
          <div className="row g-3 mt-3">
            {instaImages.map((imgSrc, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="instagram_card position-relative overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={`Instagram Image ${index + 1}`}
                    className="insta_img img-fluid"
                  />
                  <div className="img_overlay position-absolute d-flex align-items-center justify-content-center w-100 h-100">
                    <a href="#">
                      <FaInstagram size={40} color="#fff" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
