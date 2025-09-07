import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import GoUpButton from '../Components/GoUpButton/GoUpButton';
import { useAuthStore } from '../Store/useAuthStore';
import { useCartStore } from '../Store/useCartStore';

export default function MainLayout() {
  const { user } = useAuthStore();
  const { listenToCart, stopListening } = useCartStore();

  useEffect(() => {
    if (user?.uid) {
      listenToCart(user.uid);
    } else {
      stopListening();
    }

    return () => {
      stopListening();
    };
  }, [user?.uid, listenToCart, stopListening]);

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <main className='flex-grow-1 mb-5'>
        <Outlet />
      </main>
      <Footer />
      <GoUpButton />
    </div>
  );
}
