import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
