import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export function useCart() {
  const { addToCart, cart, removeFromCart, clearCart } =
    useContext(CartContext);

  return { addToCart, cart, removeFromCart, clearCart };
}
