import { create } from "zustand";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

import {
  showAddedToCart,
  showRemovedFromCart,
  showCartCleared,
  showCartAlreadyExists,
  showError,
} from "../ToastMessages.js";

export const useCartStore = create((set, get) => ({
  cart: [],
  unsubscribe: null,

  getUserCartRef: (userId) => {
    if (!userId) return null;
    return collection(db, "users", userId, "cart");
  },

  listenToCart: (userId) => {
    if (!userId) {
      set({ cart: [] });
      return;
    }

    const unsubscribe = get().unsubscribe;
    if (unsubscribe) {
      unsubscribe();
    }

    try {
      const cartRef = get().getUserCartRef(userId);
      if (!cartRef) return;

      const unsubscribeListener = onSnapshot(cartRef, (querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        set({ cart: items });
      });

      set({ unsubscribe: unsubscribeListener });
    } catch (error) {
      console.error("Error setting up cart listener:", error);
      showError("Failed to sync cart");
    }
  },

  stopListening: () => {
    const unsubscribe = get().unsubscribe;
    if (unsubscribe) {
      unsubscribe();
      set({ unsubscribe: null, cart: [] });
    }
  },

  addToCart: async (product, userId) => {
    if (!userId) {
      showError("Please log in to add items to cart");
      return;
    }

    const existing = get().cart.find((item) => item.productId === product.id);
    if (existing) {
      showCartAlreadyExists(product);
      return;
    }

    try {
      const cartRef = get().getUserCartRef(userId);
      if (!cartRef) return;

      const cartItem = {
        productId: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        img: product.img,
        description: product.description,
        addedAt: new Date().toISOString(),
      };

      const filteredCartItem = Object.fromEntries(
        Object.entries(cartItem).filter(([, value]) => value !== undefined)
      );

      await addDoc(cartRef, filteredCartItem);
      showAddedToCart(filteredCartItem);
    } catch (error) {
      console.error("Error adding to cart:", error);
      showError("Failed to add product to cart");
    }
  },

  removeFromCart: async (cartItemId, userId) => {
    if (!userId) {
      showError("Please log in to manage cart");
      return;
    }

    try {
      const cartRef = get().getUserCartRef(userId);
      if (!cartRef) return;

      const product = get().cart.find((item) => item.id === cartItemId);

      await deleteDoc(doc(cartRef, cartItemId));
      if (product) {
        showRemovedFromCart(product);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
      showError("Failed to remove product");
    }
  },

  clearCart: async (userId) => {
    if (!userId) {
      showError("Please log in to manage cart");
      return;
    }

    try {
      const cartItems = get().cart;
      const cartRef = get().getUserCartRef(userId);
      if (!cartRef) return;

      await Promise.all(
        cartItems.map((item) => deleteDoc(doc(cartRef, item.id)))
      );
      showCartCleared();
    } catch (error) {
      console.error("Error clearing cart:", error);
      showError("Failed to clear cart");
    }
  },
}));
