import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { SlBag } from "react-icons/sl";
import { showError } from "../../../ToastMessages.js";
import { useCartStore } from "../../../Store/useCartStore.js";
import { useAuthStore } from "../../../Store/useAuthStore";
import { useWishlistStore } from "../../../Store/WishlistStore.js";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cart } = useCartStore();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlistStore();
  const { user } = useAuthStore();

  const inCart = cart.some((item) => item?.productId === product?.id);
  const inWishlist = wishlist.some((item) => item?.productId === product?.id);

  const handleAddToWishlist = () => {
    const wishListItem = wishlist.find((item) => item.productId === product.id);

    if (inWishlist) {
      removeFromWishlist(wishListItem.id, user.uid);
    } else {
      addToWishlist(product, user.uid);
    }
  };

  const handleCart = () => {
    if (!user?.uid) {
      showError("Please log in to add items to cart");
      return;
    }

    if (inCart) {
      const cartItem = cart.find((item) => item.productId === product.id);
      if (cartItem) {
        removeFromCart(cartItem.id, user.uid);
      }
    } else {
      addToCart(product, user.uid);
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
            <div className="p-2 bg-light rounded-circle">
              <FaRegHeart
                size={20}
                className={`icon ${inWishlist ? "active" : ""} bg-white`}
                onClick={() => handleAddToWishlist()}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="p-2 bg-light rounded-circle">
              <SlBag
                size={20}
                className={`icon ${inCart ? "active" : ""}`}
                onClick={handleCart}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

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
