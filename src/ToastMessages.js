import { toast } from "react-hot-toast";

export const showAddedToCart = (product) =>
  toast.success(` ${product?.title || product?.title} added to cart.`, {
    id: `cart-${product.id}`,
  });

export const showRemovedFromCart = (product) =>
  toast.success(` ${product?.title || "Item"} removed from cart.`, {
    id: `remove-cart-${product.id}`,
  });

export const showCartCleared = () =>
  toast.success(" Cart cleared!", { id: "cart-cleared" });

export const showCartAlreadyExists = (product) =>
  toast(`${product?.title || product?.title} is already in the cart`, {
    id: `exists-${product.id}`,
  });

export const showAddedToWishlist = (product) =>
  toast.success(`${product.title} added to wishlist!`, {
    id: `wishlist-${product.id}`,
  });

export const showRemovedFromWishlist = (product) =>
  toast.error(`${product.title} removed from wishlist.`, {
    id: `remove-${product.id}`,
  });

export const showLoginSuccess = (name) =>
  toast.success(`Welcome back, ${name || "User"}!`, {
    id: "login-success",
  });

export const showRegisterSuccess = (name) =>
  toast.success(`Welcome ${name || "User"}! Your account was created.`, {
    id: "register-success",
  });

export const showNewsletterThanks = () =>
  toast.success("Thanks for subscribing!", {
    position: "bottom-left",
  });

export const showError = (message = "Something went wrong!") =>
  toast.error(`❌ ${message}`);
