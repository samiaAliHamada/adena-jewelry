import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";
import "./App.css";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}
