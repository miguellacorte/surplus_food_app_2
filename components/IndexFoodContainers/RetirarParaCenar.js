import React from "react";
import ContenedorComidaPrincipal from "../UI/ContenedoresComida/ContenedorComidaPrincipal";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { datosRestaurante } from "../../data/datosRestaurante";
import { router } from "expo-router";

const RetirarParaCenar = () => {
    const filteredRestaurants = datosRestaurante
      .map((restaurant) => ({
        ...restaurant,
        Productos: restaurant.Productos.filter(
          (product) =>
            product.diaRetiro === "Hoy" &&
            product.horaRetiro &&
            parseInt(product.horaRetiro.split("-")[1].split(":")[0]) >= 16 // 15:00 hora de pickup para cenar
        ),
      }))
      .filter((restaurant) => restaurant.Productos.length > 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Retirar para cenar</Text>
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
    marginVertical: 10,
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
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    marginTop: 0,
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

export default RetirarParaCenar;
