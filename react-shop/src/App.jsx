import Products from "./components/Products/Products";
import { products as initialProducts } from "./mocks/products.json";

function App() {
  return (
    <>
      <div>
        <h1>React Shop</h1>
      </div>

      <Products products={initialProducts} />
    </>
  );
}

export default App;
