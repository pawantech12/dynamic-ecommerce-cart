import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Products />} />,
    errorElement: <div>404</div>,
  },
  {
    path: "/cart",
    element: <App element={<Cart />} />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
