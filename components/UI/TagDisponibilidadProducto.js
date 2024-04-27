import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const TagDisponibilidadProducto = ({ size = 'medium' }) => {
  let scale;
  switch (size) {
    case 'small':
      scale = 0.8;
      break;
    case 'large':
      scale = 1.3;
      break;
    default:
      scale = 1;
  }

  const estilos = StyleSheet.create({
    contenedorDisponible: {
      position: "absolute",
      backgroundColor: "#5F9E5E",
      padding: 3 * scale,
      paddingHorizontal: 10 * scale,
      borderRadius: 50 * scale,
      top: 10 * scale,
      right: 10 * scale,
    },
    textoDisponible: {
      color: "#FFFFFF",
      fontSize: 12 * scale,
    },
  });

  return (
    <View style={estilos.contenedorDisponible}>
      <Text style={estilos.textoDisponible}>5 disponibles!</Text>
    </View>
  );
};

export default TagDisponibilidadProducto;