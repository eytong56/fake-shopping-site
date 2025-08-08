import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import { CartProvider } from "./CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "shop/:id",
    element: <Shop />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-9/10 mx-auto">
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  </StrictMode>
);
