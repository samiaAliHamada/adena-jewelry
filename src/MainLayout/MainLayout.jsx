import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import GoUpButton from "../Components/GoUpButton/GoUpButton";

export default function MainLayout() {
  // const { user } = useAuthStore();
  // const { listenToCart, stopListening } = useCartStore();
  // const { listenToWishlist, stopListening: stopListeningWishlist } =
  //   useWishlistStore();

  // useEffect(() => {
  //   if (user?.uid) {
  //     listenToCart(user.uid);
  //     listenToWishlist(user.uid);
  //   } else {
  //     stopListening();
  //     stopListeningWishlist();
  //   }

  //   return () => {
  //     stopListening();
  //     stopListeningWishlist();
  //   };
  // }, [
  //   user?.uid,
  //   listenToCart,
  //   stopListening,
  //   listenToWishlist,
  //   stopListeningWishlist,
  // ]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 mb-5">
        <Outlet />
      </main>
      <Footer />
      <GoUpButton />
    </div>
  );
}
