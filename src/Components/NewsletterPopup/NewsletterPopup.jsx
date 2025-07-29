import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

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
      alert("Thanks for subscribing!");
    }
  };

  const handleClose = () => {
    localStorage.setItem("newsletter_shown", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="newsletter_popup_wrapper">
      <div className="newsletter_popup">
        <button
          className="close_btn btn text-dark rounded"
          onClick={handleClose}
        >
          <MdOutlineClose size={20} />
        </button>
        <h3>Join Our Family</h3>
        <p>
          Sign up for our newsletter and receive updates you’re looking for:
          interior inspiration, the latest trends and discounts.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="submit_btn" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
