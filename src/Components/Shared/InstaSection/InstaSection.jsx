import { FaInstagram } from "react-icons/fa";
import "./InstaSection.css";

export default function InstaSection() {
  const instaImages = [
    "/insta-1.png",
    "/insta-2.png",
    "/insta-3.png",
    "/insta-4.png",
  ];

  return (
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
  );
}
