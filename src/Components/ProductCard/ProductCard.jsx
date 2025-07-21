import { Link } from "react-router-dom";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  return (
    <div className="card p-4">
      <div className="product_img text-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="img-fluid"
        />
      </div>
      <div className="product_body mt-3">
        <h3 className="product_text">{product.title}</h3>
        <p className="product_text">{product.description}</p>
        <small className="product_price">Price: ${product.price}</small>
        <hr></hr>
        <Link
          to={`/SingleProduct/${product.id}`}
          className="btn btn-outline-light text-secondary w-100 text-decoration-none"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
