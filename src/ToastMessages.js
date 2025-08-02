import { toast } from "react-toastify";

export const showAddedToWishlist = (product) =>
  toast.success(`${product.title} added to wishlist!`, {
    toastId: `wishlist-${product.id}`,
    theme: "colored",
  });

export const showRemovedFromWishlist = (product) =>
  toast.error(`${product.title} removed from wishlist.`, {
    toastId: `remove-${product.id}`,
    theme: "dark",
  });

export const showAddedToCart = (product) =>
  toast.success(`🛒 ${product.title} added to cart.`, {
    toastId: `cart-${product.id}`,
    theme: "light",
  });

export const showNewsletterThanks = () =>
  toast.success(" Thanks for subscribing!", {
    position: "bottom-left",
    theme: "colored",
  });

export const showLoginSuccess = (name) =>
  toast.success(` Welcome back, ${name || "User"}!`, {
    toastId: "login-success",
    theme: "colored",
  });

export const showRegisterSuccess = (name) =>
  toast.success(` Welcome ${name || "User"}! Your account was created.`, {
    toastId: "register-success",
    theme: "colored",
  });

export const showError = (message = "Something went wrong!") =>
  toast.error(`❌ ${message}`, {
    theme: "colored",
  });
