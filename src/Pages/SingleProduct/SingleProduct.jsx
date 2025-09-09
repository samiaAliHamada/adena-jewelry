import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Breadcrumb from "../../Components/Shared/Breadcrumb/Breadcrumb";
import { useCartStore } from "../../Store/useCartStore";
import { useWishlistStore } from "../../Store/WishlistStore";
import { useAuthStore } from "../../Store/useAuthStore";
import toast from "react-hot-toast";

export default function SingleProduct() {
  const { id } = useParams();
  const { addToCart, removeFromCart, cart } = useCartStore();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlistStore();
  const { user } = useAuthStore();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const inCart = cart.some((item) => item?.productId === product?.id);
  const inWishlist = wishlist.some((item) => item?.id === product?.id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleCart = () => {
    if (!user?.uid) {
      toast.error("Please log in to add items to cart");
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

  const handleAddToWishlist = () => {
    const wishListItem = wishlist.find((item) => item.productId === product.id);

    if (inWishlist) {
      removeFromWishlist(wishListItem.id, user.uid);
    } else {
      addToWishlist(product, user.uid);
    }
  };

  if (loading) return <h2 className="text-center my-5">Loading...</h2>;

  if (!product) return <h2 className="text-center my-5">Product not found</h2>;

  return (
    <>
      <div className="container text-black position-absolute top-100">
        <Breadcrumb
          title={product.title}
          breadcrumb={[
            { label: "Home", link: "/" },
            { label: "Products", link: "/products" },
            { label: product.title },
          ]}
        />
      </div>
      <div className="container py-5">
        <div className="row g-4 align-items-center my-5 py-5">
          <div className="col-md-6 text-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-muted">{product.description}</p>
            <h4>${product.price}</h4>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
            <div className="d-flex gap-2">
              <button
                className={`btn btn-sm btn-outline-dark rounded-0 ${
                  inCart ? "active" : ""
                }`}
                onClick={handleCart}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button>

              <button
                className={`btn btn-sm btn-outline-dark rounded-0 ${
                  inWishlist ? "active" : ""
                }`}
                onClick={handleAddToWishlist}
              >
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
