import "./App.css";
import { products as initialProducts } from "./mocks/products.json";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

import { useFilters } from "./hooks/useFilters";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <div className="page-container">
      <Header />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
