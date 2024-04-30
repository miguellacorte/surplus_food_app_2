import React from "react";
import ContenedorComidaPrincipal from "../UI/ContenedorComidaPrincipal";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { datosRestaurante } from "../../data/datosRestaurante";

const RecomendadosParaTi = () => {
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
      >
        {datosRestaurante.slice(0, 10).map((restaurante, index) => (
          <View key={index} style={styles.foodContainer}>
            <ContenedorComidaPrincipal {...restaurante} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 22,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    height: 200,
    bottom: "18%", //dimensionsAPI
  },
  scrollViewContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    flexGrow: 1,
  },
  foodContainer: {
    marginRight: 20,
  },
});

export default RecomendadosParaTi;
