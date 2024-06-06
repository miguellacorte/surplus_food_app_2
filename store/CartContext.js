import React, { createContext, useReducer } from "react";

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_QUANTITY": {
      const newCart = [...state.cart];
      const index = newCart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        newCart[index].quantity += 1;
      }
      return { ...state, cart: newCart };
    }
    case "ADD_TO_CART_WITH_CHECK":
      if (state.cart.length > 0) {
        const currentRestaurantId = state.cart[0].restaurant;
        if (action.payload.restaurant !== currentRestaurantId) {
          return state;
        }
      }

      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        console.log("Existing item:", existingItem);
        const newCart = state.cart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        console.log(
          "Updated item:",
          newCart.find((item) => item.id === action.payload.id)
        );
        return {
          ...state,
          cart: newCart,
        };
      } else {
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
    addToCartWithCheck: (item, restaurantId) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        dispatch({ type: "INCREASE_QUANTITY", payload: item });
      } else {
        dispatch({
          type: "ADD_TO_CART_WITH_CHECK",
          payload: { ...item, restaurant: restaurantId },
        });
      }
    },
    removeFromCart: (item) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: item }),
    decreaseQuantity: (item) =>
      dispatch({ type: "DECREASE_QUANTITY", payload: item }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
