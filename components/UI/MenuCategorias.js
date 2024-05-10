import React from "react";
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const categories = [
  {
    id: "1",
    text: "Caja\nSorpresa",
    categoria: "Caja Sorpresa",
    image: require("../../assets/iconos_categorias/caja_sorpresa.png"),
  },
  {
    id: "2",
    text: "Comida\nRápida",
    categoria: 'Comida rápida',
    image: require("../../assets/iconos_categorias/comida_rapida.png"),
  },
  {
    id: "3",
    text: "Desayuno",
    categoria: 'Desayuno',
    image: require("../../assets/iconos_categorias/desayuno.png"),
  },
  {
    id: "5",
    text: "Panadería",
    categoria: 'Panadería',
    image: require("../../assets/iconos_categorias/panaderia.png"),
  },
  {
    id: "6",
    text: "Plato\nPrincipal",
    categoria: 'Plato principal',
    image: require("../../assets/iconos_categorias/plato_principal.png"),
  },
  {
    id: "7",
    text: "Postre",
    categoria: 'Postre',
    image: require("../../assets/iconos_categorias/postre.png"),
  },
  {
    id: "8",
    text: "Snacks y\nMeriendas",
    categoria: 'Snacks y merienda',
    image: require("../../assets/iconos_categorias/snacks_y_meriendas.png"),
  },
  {
    id: "4",
    text: "Otros",
    categoria: 'Otros',
    image: require("../../assets/iconos_categorias/otros.png"),
  },
];

function MenuCategorias() {
    const navigation = useNavigation();
    return (
        <View style={{marginLeft: 20}}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.navigate('ordena', { searchTerm: item.categoria })}
            >
              <Image
                resizeMode="contain"
                source={item.image}
                style={styles.placeholderImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 16,
    marginHorizontal: 7,
  },
  placeholderImage: {
    height: 62,
    width: 62,
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default MenuCategorias;
