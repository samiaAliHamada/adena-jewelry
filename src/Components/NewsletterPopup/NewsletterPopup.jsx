import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { showNewsletterThanks } from "../../ToastMessages";
import "./NewsletterPopup.css";

export default function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const alreadyShown = localStorage.getItem("newsletter_shown");
    if (!alreadyShown) {
      setTimeout(() => {
        setShowPopup(true);
      }, 1000);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      localStorage.setItem("newsletter_shown", "true");
      setShowPopup(false);
      showNewsletterThanks();
    }
  };

  const handleClose = () => {
    localStorage.setItem("newsletter_shown", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="newsletter_popup_wrapper position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center">
      <div
        className="newsletter_popup position-relative bg-white text-center rounded p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <button
          className="close_btn btn position-absolute top-0 end-0 p-2 text-dark rounded"
          onClick={handleClose}
          aria-label="Close"
        >
          <MdOutlineClose size={20} />
        </button>
        <div className="py-3">
          <img
            src="./news-img.png"
            alt="Newsletter"
            className="w-100 rounded"
          />
        </div>
        <h3 className="pt-3">Join Our Family</h3>
        <p className="px-3">
          Sign up for our newsletter and receive updates you’re looking for:
          interior inspiration, the latest trends and discounts.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address..."
            className="p-2 w-100 mb-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="submit_btn text-white fw-bold border-0 p-2 rounded w-100"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
