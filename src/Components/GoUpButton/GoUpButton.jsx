import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoUpButton.css";

export default function GoUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return visible ? (
    <button
      className="up_btn btn position-fixed bottom-0 end-0 mb-5 me-3 text-white rounded-0"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  ) : null;
}
