const ProductCard = ({ id, title, description, price, thumbnail }) => {
  return (
    <li key={id}>
      <img src={thumbnail} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <p>{description}</p>
    </li>
  );
};

export default ProductCard;
