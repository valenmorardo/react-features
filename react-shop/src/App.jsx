import "./App.css";
import { products as initialProducts } from "./mocks/products.json";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="page-container">
      <Header />

      <Products products={initialProducts} />
    </div>
  );
}

export default App;
