import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TagDisponibilidadProducto = () => {
  return (
    <View style={estilos.contenedorDisponible}>
      <Text style={estilos.textoDisponible}>5 disponibles!</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedorDisponible: {
    position: "absolute",
    backgroundColor: "#5F9E5E",
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 50,
    top: 10,
    right: 10,
  },
  textoDisponible: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});

export default TagDisponibilidadProducto;