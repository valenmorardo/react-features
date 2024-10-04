import "./App.css";

import productsList from "./mocks/products.json";
import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";

import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart/Cart";

import { CartProvider } from "./context/cartContext";

function App() {
  const initialProducts = productsList.products;
  const { filterProducts } = useFilters(initialProducts);
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
