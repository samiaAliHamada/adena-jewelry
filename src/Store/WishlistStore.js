import { create } from "zustand";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const LOCAL_KEY = "wishlist";

export const useWishlistStore = create((set, get) => ({
  wishlist: [],

  fetchWishlist: async () => {
    try {
      const localData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
      set({ wishlist: localData });

      const querySnapshot = await getDocs(collection(db, "wishlist"));
      const items = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      set({ wishlist: items });
      localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  },

  addToWishlist: async (product) => {
    try {
      // Firestore
      const docRef = await addDoc(collection(db, "wishlist"), product);

      const newItem = { id: docRef.id, ...product };
      const updatedWishlist = [...get().wishlist, newItem];

      set({ wishlist: updatedWishlist });
      localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedWishlist));
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  },

  removeFromWishlist: async (id) => {
    try {
      // Firestore
      await deleteDoc(doc(db, "wishlist", id));

      const updatedWishlist = get().wishlist.filter((item) => item.id !== id);

      set({ wishlist: updatedWishlist });
      localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedWishlist));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  },
}));
