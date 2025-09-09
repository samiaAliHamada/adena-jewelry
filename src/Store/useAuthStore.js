import { create } from "zustand";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  setUser: (user) => set({ user }),

  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredential.user, error: null });
      return userCredential.user;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  register: async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, { displayName: name });

      set({ user: { ...userCredential.user, displayName: name }, error: null });
      return userCredential.user;
    } catch (error) {
      set({ error: error.message });
      throw error;
    }
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null });
    // document.location.reload();
  },

  listenToAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },
}));
