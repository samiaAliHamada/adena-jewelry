import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";
import { useEffect } from "react";
import { useAuthStore } from "./Store/useAuthStore";
import "./App.css";

export default function App() {
  const listenToAuth = useAuthStore((state) => state.listenToAuth);

  useEffect(() => {
    listenToAuth();
  }, [listenToAuth]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}
