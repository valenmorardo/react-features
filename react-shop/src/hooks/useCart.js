import { useContext} from "react";
import { CartContext } from "../context/cartContext";

export function useCart() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return {
    addToCart,
    removeFromCart,
    clearCart,
    cart,
  };
}
