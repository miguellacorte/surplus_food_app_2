import React, { createContext, useReducer } from "react";

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART_WITH_CHECK":
      if (state.cart.length > 0) {
        const currentRestaurant = state.cart[0].restaurant;
        if (action.payload.restaurant !== currentRestaurant) {
          return state;
        }
      }

      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        // If the item does not exist in the cart, add it
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case "DECREASE_QUANTITY":
      const existingItemDecrease = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItemDecrease && existingItemDecrease.quantity > 1) {
        // If the item exists in the cart and its quantity is more than 1, decrease its quantity
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
      } else {
        // If the item's quantity is 1, remove it from the cart
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
    case "CLEAR_CART":
      return { ...state, cart: [] };
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
    addToCartWithCheck: (item, restaurantId) =>
      dispatch({
        type: "ADD_TO_CART_WITH_CHECK",
        payload: { ...item, restaurant: restaurantId },
      }),
    removeFromCart: (item) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: item }),
    decreaseQuantity: (item) =>
      dispatch({ type: "DECREASE_QUANTITY", payload: item }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
