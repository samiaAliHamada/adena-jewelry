import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { SlBag } from "react-icons/sl";
import { useEffect, useState } from "react";

import { useCartStore } from "../../../Store/useCartStore.js";
import {
  showAddedToWishlist,
  showRemovedFromWishlist,
} from "../../../ToastMessages.js";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cart } = useCartStore();

  // wishlist state
  const [liked, setLiked] = useState(false);

  // check if product is in cart
  const inCart = cart.some((item) => item.id === product.id);

  // check wishlist from localStorage
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isLiked = existing.some((item) => item.id === product.id);
    setLiked(isLiked);
  }, [product.id]);

  // wishlist handler
  const handleAddToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyAdded = existing.find((item) => item.id === product.id);

    let updated;
    if (!alreadyAdded) {
      updated = [...existing, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setLiked(true);
      showAddedToWishlist(product);
    } else {
      updated = existing.filter((item) => item.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setLiked(false);
      showRemovedFromWishlist(product);
    }
  };

  // cart handler
  const handleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="product_card card h-100 position-relative">
      <div className="position-relative">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />

        <div className="icon_overlay w-100 h-100 position-absolute">
          <div className="icons d-flex align-items-center justify-content-center w-100 h-100 gap-4">
            {/* Wishlist */}
            <div className="p-2 bg-light rounded-circle">
              <FaRegHeart
                size={20}
                className={`icon ${liked ? "active" : ""} bg-white`}
                onClick={() => handleAddToWishlist(product)}
                style={{ cursor: "pointer" }}
              />
            </div>

            {/* Cart */}
            <div className="p-2 bg-light rounded-circle">
              <SlBag
                size={20}
                className={`icon ${inCart ? "active" : ""}`}
                onClick={handleCart}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          {/* Quick View */}
          <div className="d-flex align-items-center justify-content-center">
            <div className="view_btn position-absolute btn rounded-0 w-100 bg-black">
              <Link
                to={`/singleproduct/${product.id}`}
                className="text-white text-decoration-none"
              >
                Quick View
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <h6 className="card-title product_text">{product.title}</h6>
        <p className="card-text product_text">{product.description}</p>
        <p className="card-text">
          <strong>${product.price}</strong>
        </p>
      </div>
    </div>
  );
}
