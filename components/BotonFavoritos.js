import React, { useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const BotonFavoritos = () => {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  return (
    <Pressable onPress={toggleFavorito} style={estilos.boton}>
      <View style={estilos.iconoContenedor}>
        <FontAwesome
          name={favorito ? "heart" : "heart-o"}
          size={20}
          color="white"
        />
      </View>
    </Pressable>
  );
};

const estilos = StyleSheet.create({
  boton: {
    padding: 5,
    margin:3,
  },
  iconoContenedor: {
    backgroundColor: "rgba(128, 128, 128, 0.7)",
    borderRadius: 50,
    padding: 5,
    width: 30,
    alignItems: "center",
  },
});

export default BotonFavoritos;
