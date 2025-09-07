import { useEffect } from 'react';
import { useCartStore } from '../../Store/useCartStore';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from '../../Store/useAuthStore';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const { user } = useAuthStore();

  const handleRemove = (id, name) => {
    if (!user?.uid) {
      toast.error('Please log in to manage cart');
      return;
    }
    removeFromCart(id, user.uid);
    toast.success(`🛒 ${name} removed from cart`, { duration: 2000 });
  };

  const handleClear = () => {
    if (!user?.uid) {
      toast.error('Please log in to manage cart');
      return;
    }
    clearCart(user.uid);
    toast.success('🛒 Cart cleared', { duration: 2000 });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className='offcanvas-backdrop show'
        onClick={handleBackdropClick}
        style={{ zIndex: 1040 }}
      ></div>

      <div
        className='offcanvas offcanvas-end show'
        tabIndex='-1'
        id='offcanvasCart'
        aria-labelledby='offcanvasCartLabel'
        style={{ zIndex: 1045 }}
      >
        <div className='offcanvas-header position-relative p-0'>
          <div className='position-relative'>
            <img src='/cart.png' alt='cart-image' className='img-fluid' />
          </div>
          <h5
            className='offcanvas-title position-absolute bottom-0 m-3 text-white'
            id='offcanvasCartLabel'
          >
            BEFORE YOU <br /> LEAVE...
          </h5>
          <button
            type='button'
            className='btn-close text-reset position-absolute top-0 end-0 m-4 rounded-0 bg-light'
            onClick={onClose}
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          {cart.length > 0 ? (
            <>
              <ul className='list-group'>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className='list-group-item d-flex justify-content-between align-items-center'
                  >
                    <div className='d-flex align-items-center gap-2'>
                      <img
                        src={item.thumbnail || item.img || '/default.png'}
                        alt={item.name}
                        width='50'
                        height='50'
                        className='rounded'
                      />
                      <div>
                        <strong>{item.name}</strong>
                        <br />
                        <small>${item.price}</small>
                      </div>
                    </div>
                    <button
                      className='btn btn-sm btn-danger'
                      onClick={() => handleRemove(item.id, item.name)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <button className='btn btn-dark w-100 mt-3' onClick={handleClear}>
                Checkout
              </button>
            </>
          ) : (
            <p>Your cart is empty 🛒</p>
          )}
        </div>
      </div>
      <Toaster position='top-right' />
    </>
  );
}
