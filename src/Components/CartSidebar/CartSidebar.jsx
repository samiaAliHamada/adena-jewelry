import { useEffect } from "react";
import { useCartStore } from "../../Store/useCartStore";
import toast, { Toaster } from "react-hot-toast";

export default function CartSidebar() {
  const { cart, fetchCart, removeFromCart, clearCart } = useCartStore();

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.success(`🛒 ${name} removed from cart`, { duration: 2000 });
  };

  const handleClear = () => {
    clearCart();
    toast.success("🛒 Cart cleared", { duration: 2000 });
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
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
            data-bs-dismiss="offcanvas"
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
                        alt={item.name}
                        width="50"
                        height="50"
                        className="rounded"
                      />
                      <div>
                        <strong>{item.name}</strong>
                        <br />
                        <small>${item.price}</small>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(item.id, item.name)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <button className="btn btn-dark w-100 mt-3" onClick={handleClear}>
                Checkout
              </button>
            </>
          ) : (
            <p>Your cart is empty 🛒</p>
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}
