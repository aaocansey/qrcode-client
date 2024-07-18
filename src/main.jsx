import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Genqrcode from "./pages/Genqrcode";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/gen-qrcode",
    element: <Genqrcode />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
