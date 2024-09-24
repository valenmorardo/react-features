import "./ProductCard.css";

import { useCart } from "../../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons/Icons";

const ProductCard = ({ product }) => {
  const { id, title, description, price, thumbnail } = product;
  const { addToCart, cart, removeFromCart } = useCart();

  const isPrductInCart = cart.some((item) => item.id === id);

  return (
    <li key={id}>
      <img src={thumbnail} />
      <div>
        <strong>
          {title} - ${price}
        </strong>
      </div>
      <p>{description}</p>
      <div>
        <button
        style={{backgroundColor: isPrductInCart? 'red' : "#09f"}}
          onClick={() => {
            isPrductInCart ? removeFromCart(product) : addToCart(product);
          }}
        >
          {isPrductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
