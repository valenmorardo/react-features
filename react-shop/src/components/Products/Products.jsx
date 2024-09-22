import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </main>
  );
};

export default Products;
