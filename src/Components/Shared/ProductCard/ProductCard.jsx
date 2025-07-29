import { Link } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import React, { useState } from "react";
import "./ProductCard.css";
import SingleProduct from "../../../Pages/SingleProduct/SingleProduct";
// ProductCard.jsx
export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);
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
            <div className="p-2 bg-light rounded-circle">
              <FaRegHeart
                size={20}
                className={`icon ${liked ? "active" : ""} bg-white`}
                onClick={() => setLiked(!liked)}
              />
            </div>
            <div className="p-2 bg-light rounded-circle">
              <FaRegUser
                size={20}
                className={`icon ${inCart ? "active" : ""}`}
                onClick={() => setInCart(!inCart)}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="view_btn position-absolute btn rounded-0 w-100 bg-black">
              <Link
                to={"/SingleProduct"}
                className="text-white text-decoration-none"
              >
                Quick View
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>${product.price}</strong>
        </p>
      </div>
    </div>
  );
}
