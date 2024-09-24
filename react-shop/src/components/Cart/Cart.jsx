import { useId } from "react";
import { useCart } from "../../hooks/useCart";

import {
  CartIcon,
  ClearCartIcon,
} from "../Icons/Icons";

import "./Cart.css";

function CartItem({ item, addToCart }) {
  return (
    <li>
      <img src={item.thumbnail} />
      <div>
        <strong>{item.title}</strong> - ${item.price}
      </div>

      <footer>
        <small>Qty: {item.quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={() => {
                addToCart(item);
              }}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
