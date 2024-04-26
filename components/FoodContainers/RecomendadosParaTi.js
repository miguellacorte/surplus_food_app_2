import React from "react";
import ContenedorComidaPrincipal from "../../components/ContenedorComidaPrincipal";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
        <View style={styles.foodContainer}>
          <ContenedorComidaPrincipal />
        </View>
        <View style={styles.foodContainer}>
          <ContenedorComidaPrincipal />
        </View>
        {/* Wrap more components as needed */}
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
