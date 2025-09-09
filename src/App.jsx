import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";
import { useEffect } from "react";
import { useAuthStore } from "./Store/useAuthStore";
import "./App.css";
import { useCartStore } from "./Store/useCartStore";
import { useWishlistStore } from "./Store/WishlistStore";

export default function App() {
  const listenToAuth = useAuthStore((state) => state.listenToAuth);
  const { user } = useAuthStore();
  const { listenToCart, stopListening } = useCartStore();
  const { listenToWishlist, stopListening: stopListeningWishlist } =
    useWishlistStore();

  useEffect(() => {
    listenToAuth();
  }, [listenToAuth]);

  useEffect(() => {
    if (user?.uid) {
      listenToCart(user.uid);
      listenToWishlist(user.uid);
    } else {
      stopListening();
      stopListeningWishlist();
    }

    return () => {
      stopListening();
      stopListeningWishlist();
    };
  }, [
    user?.uid,
    listenToCart,
    stopListening,
    listenToWishlist,
    stopListeningWishlist,
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}
