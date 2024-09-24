import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  if (actionType === "ADD_TO_CART") {
    const { id } = actionPayload;
    const productInCartIndex = state.findIndex((item) => item.id === id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(state);
      newCart[productInCartIndex].quantity += 1;
      console.log(newCart);
      return newCart;
    }

    // IF isnt in the car
    return [
      ...state,
      {
        ...actionPayload, // product
        quantity: 1,
      },
    ];
  }

  if (actionType === "REMOVE_FROM_CART") {
    const { id } = actionPayload;
    const newCart = state.filter((item) => item.id !== id);
    return newCart;
  }

  if (actionType === "CLEAR_CART") {
    return initialState;
  }

  return state;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  console.log(state);
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
