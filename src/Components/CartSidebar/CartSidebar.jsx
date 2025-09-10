import { useEffect } from "react";
import { useCartStore } from "../../Store/useCartStore";
import { useAuthStore } from "../../Store/useAuthStore";

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const { user } = useAuthStore();

  const handleRemove = (id, item) => {
    if (!user?.uid) return;
    removeFromCart(id, user.uid, item);
  };

  const handleClear = () => {
    if (!user?.uid) return;
    clearCart(user.uid);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="offcanvas-backdrop show"
        onClick={handleBackdropClick}
        style={{ zIndex: 1040 }}
      ></div>

      <div
        className="offcanvas offcanvas-end show"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
        style={{ zIndex: 1045 }}
      >
        <div className="offcanvas-header position-relative p-0">
          <div className="position-relative">
            <img src="/cart.png" alt="cart-image" className="img-fluid" />
          </div>
          <h5
            className="offcanvas-title position-absolute bottom-0 m-3 text-white"
            id="offcanvasCartLabel"
          >
            BEFORE YOU <br /> LEAVE...
          </h5>
          <button
            type="button"
            className="btn-close text-reset position-absolute top-0 end-0 m-4 rounded-0 bg-light"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length > 0 ? (
            <>
              <ul className="list-group">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={item.thumbnail || item.img || "/default.png"}
                        alt={item.title}
                        width="150"
                        height="150"
                        className="rounded img-fluid"
                      />

                      <div>
                        <strong>{item.title || item.name}</strong>
                        <br />
                        <small>${item.price}</small>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(item.id, item)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="d-flex align-items-center justify-content-center gap-3 py-4">
                <button
                  className="btn text-white btn-danger"
                  onClick={handleClear}
                >
                  Clear Cart
                </button>
                <button className="btn btn-dark">Checkout</button>
              </div>
            </>
          ) : (
            <h5 className="text-center">Your cart is empty 🛒</h5>
          )}
        </div>
      </div>
    </>
  );
}
