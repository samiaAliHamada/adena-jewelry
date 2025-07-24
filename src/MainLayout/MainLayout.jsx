import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="min-vh-100 d-flex flex-column">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
