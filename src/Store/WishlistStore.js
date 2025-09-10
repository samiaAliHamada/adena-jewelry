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
  showAddedToWishlist,
  showRemovedFromWishlist,
  showError,
} from "../ToastMessages.js";

const LOCAL_KEY = "wishlist";

export const useWishlistStore = create((set, get) => ({
  wishlist: [],
  unsubscribe: null,

  getUserWishlistRef: (userId) => {
    if (!userId) return null;
    return collection(db, "users", userId, LOCAL_KEY);
  },

  listenToWishlist: (userId) => {
    if (!userId) {
      set({ wishlist: [] });
      return;
    }

    const unsubscribe = get().unsubscribe;
    if (unsubscribe) {
      unsubscribe();
    }

    try {
      const wishlistRef = get().getUserWishlistRef(userId);
      if (!wishlistRef) return;

      const unsubscribeListener = onSnapshot(wishlistRef, (querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        set({ wishlist: items });
      });

      set({ unsubscribe: unsubscribeListener });
    } catch (error) {
      console.error("Error setting up wishlist listener:", error);
      showError("Failed to sync wishlist");
    }
  },

  stopListening: () => {
    const unsubscribe = get().unsubscribe;
    if (unsubscribe) {
      unsubscribe();
      set({ unsubscribe: null, wishlist: [] });
    }
  },

  addToWishlist: async (product, userId) => {
    if (!userId) {
      showError("Please log in to add items to wishlist");
      return;
    }

    const existing = get().wishlist.find(
      (item) => item.productId === product.id
    );
    if (existing) {
      showError(`${product.title} is already in the wishlist`);
      return;
    }

    try {
      const wishlistRef = get().getUserWishlistRef(userId);
      if (!wishlistRef) return;

      const wishlistItem = {
        productId: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        img: product.img,
        description: product.description,
        addedAt: new Date().toISOString(),
      };

      const filteredWishlistItem = Object.fromEntries(
        Object.entries(wishlistItem).filter(([, value]) => value !== undefined)
      );

      await addDoc(wishlistRef, filteredWishlistItem);
      showAddedToWishlist(filteredWishlistItem);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      showError("Failed to add product to wishlist");
    }
  },

  removeFromWishlist: async (wishlistItemId, userId) => {
    if (!userId) {
      showError("Please log in to manage wishlist");
      return;
    }

    try {
      const wishlistRef = get().getUserWishlistRef(userId);
      if (!wishlistRef) return;

      const product = get().wishlist.find((item) => item.id === wishlistItemId);

      await deleteDoc(doc(wishlistRef, wishlistItemId));
      if (product) {
        showRemovedFromWishlist(product);
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
      showError("Failed to remove product");
    }
  },

  clearWishlist: async (userId) => {
    if (!userId) {
      showError("Please log in to manage wishlist");
      return;
    }

    try {
      const wishlistItems = get().wishlist;
      const wishlistRef = get().getUserWishlistRef(userId);
      if (!wishlistRef) return;

      await Promise.all(
        wishlistItems.map((item) => deleteDoc(doc(wishlistRef, item.id)))
      );
      showRemovedFromWishlist({ title: "All items" }); // عشان يدي feedback واضح
    } catch (error) {
      console.error("Error clearing wishlist:", error);
      showError("Failed to clear wishlist");
    }
  },
}));
