import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import GoUpButton from "../Components/GoUpButton/GoUpButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/toastStyles.css";

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 mb-5">
        <Outlet />
      </main>
      <Footer />
      <GoUpButton />
      <ToastContainer />
    </div>
  );
}
