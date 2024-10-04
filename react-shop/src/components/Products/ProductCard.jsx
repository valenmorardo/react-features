import { AddToCartIcon, RemoveFromCartIcon } from "../Icons/Icons";

import { useCart } from "../../hooks/useCart";

export function ProductCard(product) {
  const { addToCart, cart, removeFromCart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  const isProductInCart = checkProductInCart(product);
  return (
    <li key={product.id}>
      <img src={product.thumbnail} />
      <div className="product-data">
        <strong>
          {product.title} - ${product.price}
        </strong>
      </div>

      <button style={{backgroundColor: isProductInCart? "red" : "#777777"}}
        onClick={() => {
          !isProductInCart ? addToCart(product) : removeFromCart(product);
        }}
      >
        {!isProductInCart ? <AddToCartIcon /> : <RemoveFromCartIcon />}
      </button>
    </li>
  );
}
