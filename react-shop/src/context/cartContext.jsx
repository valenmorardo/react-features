import { createContext, useReducer} from "react";

export const CartContext = createContext();

const cartinitialState = [];

const CartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id: productId } = actionPayload;

      //check if product it is already in cart
      const productInCartIndex = state.findIndex(
        (item) => item.id === productId
      );

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      }

      // si no esta en el cart:
      return [...state, { ...actionPayload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART": {
      const { id: productId } = actionPayload;
      return state.filter((item) => item.id !== productId);
    }

    case "CLEAR_CART":
      return cartinitialState;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, cartinitialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart: state, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
