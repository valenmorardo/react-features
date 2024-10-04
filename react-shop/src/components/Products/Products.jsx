import { ProductCard } from "./ProductCard";
import './Products.css'

export function Products({ products }) {

  return (
    <main>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </main>
  );
}
