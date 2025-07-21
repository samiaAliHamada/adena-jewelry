import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import "./App.css";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
