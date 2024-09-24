import "./App.css";
import { products as initialProducts } from "./mocks/products.json";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

import { useFilters } from "./hooks/useFilters";

import { CartProvider } from "./context/cartContext";

import { Cart } from "./components/Cart/Cart";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <div className="page-container">
        <Header />
        <Cart />
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  );
}

export default App;
