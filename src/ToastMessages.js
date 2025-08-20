import { toast } from "react-hot-toast";

export const showAddedToWishlist = (product) =>
  toast.success(`${product.title} added to wishlist!`, {
    id: `wishlist-${product.id}`,
  });

export const showRemovedFromWishlist = (product) =>
  toast.error(`${product.title} removed from wishlist.`, {
    id: `remove-${product.id}`,
  });

export const showAddedToCart = (product) =>
  toast.success(`🛒 ${product.title} added to cart.`, {
    id: `cart-${product.id}`,
  });

export const showNewsletterThanks = () =>
  toast.success("Thanks for subscribing!", {
    position: "bottom-left",
  });

export const showLoginSuccess = (name) =>
  toast.success(`Welcome back, ${name || "User"}!`, {
    id: "login-success",
  });

export const showRegisterSuccess = (name) =>
  toast.success(`Welcome ${name || "User"}! Your account was created.`, {
    id: "register-success",
  });

export const showError = (message = "Something went wrong!") =>
  toast.error(`❌ ${message}`);
