import React, { useState, useContext, useEffect } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { UserContext } from "../../../store/UserContext"; // Update this import path
import { Colors } from "../../../constants/Colors";

const BotonFavoritos = ({ size, restaurantId, restaurantePage }) => {
  const { user, updateFavorites } = useContext(UserContext);
  const [favorito, setFavorito] = useState(
    user?.RestaurantesFavoritos?.includes(restaurantId)
  );

  useEffect(() => {
    setFavorito(user?.RestaurantesFavoritos?.includes(restaurantId));
  }, [user?.RestaurantesFavoritos]);

  let scale;
  switch (size) {
    case "small":
      scale = 0.8;
      break;
    case "large":
      scale = 1.3;
      break;
    default:
      scale = 1;
  }

  const estilos = StyleSheet.create({
    boton: {
      padding: 5 * scale,
      margin: 3 * scale,
    },
    iconoContenedor: {
      backgroundColor: "rgba(128, 128, 128, 0.7)",
      borderRadius: 60 * scale,
      padding: 5 * scale,
      width: 32 * scale,
      height: 32 * scale,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 3,
    },
  });

  const toggleFavorito = () => {
    setFavorito(!favorito);
    updateFavorites(restaurantId);
  };

  return (
    <Pressable onPress={toggleFavorito} style={estilos.boton}>
      {restaurantePage ? (
        <FontAwesome
          name={favorito ? "heart" : "heart-o"}
          size={22 * scale}
          color={Colors.VerdeOscuro}
        />
      ) : (
        <View style={estilos.iconoContenedor}>
          <FontAwesome
            name={favorito ? "heart" : "heart-o"}
            size={18 * scale}
            color="white"
          />
        </View>
      )}
    </Pressable>
  );
};

export default BotonFavoritos;