import { create } from "zustand";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useProductStore = create((set, get) => ({
  products: [],
  categories: [],
  loading: false,
  error: null,

  search: "",
  filter: "all",
  sort: "none",

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const categories = [
        ...new Set(products.map((p) => p.category).filter(Boolean)),
      ];

      set({ products, categories });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  setSearch: (search) => set({ search }),
  setFilter: (filter) => set({ filter }),
  setSort: (sort) => set({ sort }),

  getFilteredProducts: () => {
    const { products, search, filter, sort } = get();

    return products
      .filter((p) => {
        if (
          search.trim() &&
          !p.title?.toLowerCase().includes(search.toLowerCase())
        ) {
          return false;
        }
        if (filter !== "all" && p.category !== filter) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sort === "asc") return a.price - b.price;
        if (sort === "desc") return b.price - a.price;
        return 0;
      });
  },
}));
