import './ProductCard.css'

const ProductCard = ({ id, title, description, price, thumbnail }) => {
  return (
    <li key={id}>
      <img src={thumbnail} />
      <div>
        <strong>{title} - ${price}</strong> 
      </div>
      <p>{description}</p>
      <div>
        <button>
          Añadir al carrito
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
