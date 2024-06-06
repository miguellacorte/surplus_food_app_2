import React from "react";
import ContenedorComidaPrincipal from "../UI/ContenedoresComida/ContenedorComidaPrincipal";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { datosRestaurante } from "../../data/datosRestaurante";
import { router } from "expo-router";

const RecomendadosParaTi = () => {
  //filtrar por distancia y rating
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recomendados para ti</Text>
        <FontAwesome name="chevron-right" size={12} color="black" />
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.productsContainer}>
          {datosRestaurante.slice(0, 10).map((item, index) => (
            <Pressable
              key={index}
              onPress={() =>
                router.push({
                  pathname: "(Restaurantes)/[id]",
                  params: { id: item.id },
                })
              }
              style={styles.foodContainer}
            >
              <View >
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
    alignItems: "center",
    marginLeft: 20,
  },
  productsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
 
});

export default RecomendadosParaTi;
