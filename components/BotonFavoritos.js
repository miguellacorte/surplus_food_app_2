import React, { useState } from "react";
import { Pressable, View, StyleSheet, Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

const BotonFavoritos = ({ size, onPress }) => {
  const [favorito, setFavorito] = useState(false);

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
      borderRadius: 50 * scale,
      padding: 5 * scale,
      width: 30 * scale,
      alignItems: "center",
      marginTop: 3,
    },
  });

  const toggleFavorito = () => {
    setFavorito(!favorito);
    onPress();
  };

  return (
    <Pressable onPress={toggleFavorito} style={estilos.boton}>
      <View style={estilos.iconoContenedor}>
        <FontAwesome
          name={favorito ? "heart" : "heart-o"}
          size={20 * scale}
          color="white"
        />
      </View>
    </Pressable>
  );
};

export default BotonFavoritos;