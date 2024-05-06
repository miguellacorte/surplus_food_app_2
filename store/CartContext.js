import React, { createContext, useReducer } from "react";

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    cart: state.cart,
    addToCart: (item) => dispatch({ type: "ADD_TO_CART", payload: item }),
    removeFromCart: (item) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: item }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
