import { products as initialProducts } from "./mocks/products.json";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <Products products={initialProducts} />
    </>
  );
}

export default App;
