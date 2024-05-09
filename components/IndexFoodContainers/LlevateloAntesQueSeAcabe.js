import React from "react";
import ContenedorComidaPrincipal from "../UI/ContenedoresComida/ContenedorComidaPrincipal";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { datosRestaurante } from "../../data/datosRestaurante";
import { router } from "expo-router";

const LlevateloAntesQueSeAcabe = () => {
  let filteredRestaurants = datosRestaurante
    .map((restaurant) => ({
      ...restaurant,
      Productos: restaurant.Productos.filter(
        (product) => parseInt(product.cantidadDisponible) <= 3
      ),
    }))
    .filter((restaurant) => restaurant.Productos.length > 0);

  filteredRestaurants = filteredRestaurants.sort(() => Math.random() - 0.5);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Llévatelo antes que se acabe!</Text>
        <FontAwesome name="chevron-right" size={12} color="black" />
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.productsContainer}>
          {filteredRestaurants.map((item, index) => (
            <Pressable
              key={index}
              onPress={() =>
                router.push({
                  pathname: "/Restaurants/[id]",
                  params: { id: item.id },
                })
              }
              style={styles.foodContainer}
            >
              <View>
                <ContenedorComidaPrincipal {...item} />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  foodContainer: {
    marginTop: 20,
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 0,
  },
  scrollView: {
    marginTop: 0,
    bottom: "18%", //dimensionsAPI
  },
  scrollViewContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  productsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LlevateloAntesQueSeAcabe;
