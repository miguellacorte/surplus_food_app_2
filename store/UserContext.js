import React, { createContext, useReducer, useEffect } from 'react';
import { datosUsuario } from '../data/datosUsuario';

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    case 'UPDATE_LOCATION':
      return { ...state, user: { ...state.user, Ubicaciones: action.payload } };
    case 'UPDATE_FAVORITES':
      return { ...state, user: { ...state.user, RestaurantesFavoritos: action.payload } };
    // Add more cases for other parts of the user data as needed
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const UserContext = createContext();

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // This is where you would normally make the network request.
    // For now, we'll just use the local data.
    dispatch({ type: 'UPDATE_USER', payload: datosUsuario[0] });
  }, []);

  const value = {
    user: state.user,
    updateUser: (user) => dispatch({ type: 'UPDATE_USER', payload: user }),
    updateLocation: (location) => dispatch({ type: 'UPDATE_LOCATION', payload: location }),
    updateFavorites: (id) => {
      const newFavorites = [...state.user.RestaurantesFavoritos, id];
      dispatch({ type: 'UPDATE_FAVORITES', payload: newFavorites });
    },
    // Add more update functions as needed
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };