import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons/Icons";
import "./Cart.css";

import { useCart } from "../../hooks/useCart";

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} hidden type="checkbox"></input>

      <section className="cart">
        {cart.length !== 0 ? (
          <div className="products-cart-container">
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  <button
                    className="btn-eliminate-item"
                    onClick={() => {
                      removeFromCart(product);
                    }}
                  >
                    x
                  </button>
                  <img src={product.thumbnail} />
                  <strong>
                    {product.title} - ${product.price}
                  </strong>

                  <div>
                    <label>Qty: {product.quantity} </label>
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      {" "}
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="msg-emptyCart">
            <span>Carrito vacio!</span>
          </div>
        )}

        <footer>
          <button
            className="clearCart"
            onClick={() => {
              clearCart();
            }}
          >
            <ClearCartIcon />
          </button>
        </footer>
      </section>
    </>
  );
}
