import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/Colors";

const VerdeOscuro = Colors.VerdeOscuro;
const VerdeMedio = Colors.VerdeMedio;
const VerdeClaro = Colors.VerdeClaro;
const Naranja = Colors.Naranja;
const Rojo = Colors.Rojo;

const { width, height } = Dimensions.get("window");

const TagDisponibilidadProducto = ({ size , cantidadDisponible }) => {
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

  let backgroundColor;
  let textoDisponible;

  if (cantidadDisponible >= 6) {
    backgroundColor = VerdeOscuro;
    textoDisponible = `${cantidadDisponible} disponibles`;
  } else if (cantidadDisponible == 5) {
    backgroundColor = VerdeMedio;
    textoDisponible = `${cantidadDisponible} disponibles`;
  } else if (cantidadDisponible == 4) {
    backgroundColor = VerdeClaro;
    textoDisponible = `${cantidadDisponible} disponibles`;
  } else if (cantidadDisponible == 3) {
    backgroundColor = Naranja;
    textoDisponible = `${cantidadDisponible} disponibles`;
  } else if (cantidadDisponible <= 2 && cantidadDisponible > 1) {
    backgroundColor = Rojo;
    textoDisponible = `${cantidadDisponible} disponibles`;
  } else if (cantidadDisponible == 1) {
    backgroundColor = Rojo;
    textoDisponible = "Último disponible!";
  } else {
    backgroundColor = '#000';
    textoDisponible = "Agotado";
  }

  const estilos = StyleSheet.create({
    contenedorDisponible: {
      backgroundColor: backgroundColor,
      padding: 3 * scale,
      paddingHorizontal: 10 * scale,
      borderRadius: 50 * scale,
    },
    textoDisponible: {
      color: "#FFFFFF",
      fontSize: 12 * scale,
    },
  });

  return (
    <View style={estilos.contenedorDisponible}>
      <Text style={estilos.textoDisponible}>{textoDisponible}</Text>
    </View>
  );
};

export default TagDisponibilidadProducto;

