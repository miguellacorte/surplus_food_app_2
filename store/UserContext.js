import React, { createContext, useReducer, useEffect } from "react";
import { datosUsuario } from "../data/datosUsuario";

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    case "UPDATE_LOCATION":
      return { ...state, user: { ...state.user, Ubicaciones: action.payload } };
    case "UPDATE_FAVORITES":
      return {
        ...state,
        user: { ...state.user, RestaurantesFavoritos: action.payload },
      };
    case "START_UPDATE_FAVORITES":
      return { ...state, loading: true };
    case "FINISH_UPDATE_FAVORITES":
      return {
        ...state,
        loading: false,
        user: { ...state.user, RestaurantesFavoritos: action.payload },
      };
    // Add more cases for other parts of the user data as needed
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const UserContext = createContext();

const fakeNetworkRequest = () =>
  new Promise((resolve) => setTimeout(resolve, 1000));

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // This is where you would normally make the network request.
    // For now, we'll just use the local data.
    dispatch({ type: "UPDATE_USER", payload: datosUsuario[0] });
  }, []);

  const value = {
    user: state.user,
    newFavorites: state.user?.RestaurantesFavoritos,
    updateFavorites: async (id) => {
      let newFavorites;
      if (state.user.RestaurantesFavoritos.includes(id)) {
        newFavorites = state.user.RestaurantesFavoritos.filter(
          (favId) => favId !== id
        );
      } else {
        newFavorites = [...state.user.RestaurantesFavoritos, id];
      }

      try {
        dispatch({ type: "START_UPDATE_FAVORITES" });
        await fakeNetworkRequest();
        dispatch({ type: "FINISH_UPDATE_FAVORITES", payload: newFavorites });
      } catch (error) {
        console.error("Failed to update favorites:", error);
      }
    },
    loading: state.loading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
