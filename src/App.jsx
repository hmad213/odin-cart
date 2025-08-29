import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductsProvider>
  );
}
