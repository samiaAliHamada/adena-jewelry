import { create } from "zustand";
import toast from "react-hot-toast";
import { db, auth } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



export const useCartStore = create((set, get) => ({
  cart: [],

  fetchCart: async () => {
    if (!auth.currentUser) {
      return
    }
    try {
      const querySnapshot = await getDocs(collection(db, "cart"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const uniqueItems = Array.from(
        new Map(items.map((item) => [item.id, item])).values()
      );
      set({ cart: uniqueItems });
    } catch (error) {
      console.error(error);
      toast.error("Failed to load cart");
    }
  },

  addToCart: async (product) => {
    const existing = get().cart.find((item) => item.id === product.id);
    if (existing) {
      toast(`🛒 ${product.name} is already in the cart`);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "cart"), product);
      set((state) => ({
        cart: [...state.cart, { id: docRef.id, ...product }],
      }));
      toast.success(`🛒 ${product.name} added to cart`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product to cart");
    }
  },

  removeFromCart: async (id) => {
    try {
      await deleteDoc(doc(db, "cart", id));
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }));
      toast.success("🛒 Item removed from cart");
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove product");
    }
  },

  clearCart: async () => {
    try {
      const cartItems = get().cart;
      await Promise.all(
        cartItems.map((item) => deleteDoc(doc(db, "cart", item.id)))
      );
      set({ cart: [] });
      toast.success("🛒 Cart cleared");
    } catch (error) {
      console.error(error);
      toast.error("Failed to clear cart");
    }
  },
}));
