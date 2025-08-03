import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import SizeGuide from "../Pages/SizeGuide/SizeGuide";
import Cart from "../Pages/Cart/Cart";
import WishList from "../Pages/WishList/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/sizeGuide",
        element: <SizeGuide />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
