import { useCartStore } from "../../Store/CartStore.js";
import { FaTrash } from "react-icons/fa";

export default function CartSidebar() {
  const { cartItems, removeFromCart, clearCart } = useCartStore();

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          My Cart
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body d-flex flex-column">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty 🛒</p>
        ) : (
          <>
            <ul className="list-group flex-grow-1 overflow-auto">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <small className="text-muted">
                      ${item.price} × {item.quantity}
                    </small>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-3">
              <button className="btn btn-danger w-100" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
