import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryIcons = {
  "Caja sorpresa": { library: AntDesign, name: "gift", size: 18 },
  "Plato principal": {
    library: MaterialCommunityIcons,
    name: "food-turkey",
    size: 18,
  },
  Desayuno: { library: MaterialIcons, name: "breakfast-dining", size: 18 },
  Panaderia: { library: MaterialIcons, name: "bakery-dining", size: 20 },
  "Comida rapida": {
    library: MaterialCommunityIcons,
    name: "hamburger",
    size: 18,
  },
  Postre: { library: MaterialCommunityIcons, name: "cupcake", size: 16 },
  "Snacks y merienda": {
    library: MaterialCommunityIcons,
    name: "food-variant",
    size: 20,
  },
  Otros: {
    library: MaterialCommunityIcons,
    name: "silverware-fork-knife",
    size: 16,
  },
};

const CategoryButton = ({ category }) => {
  if (!CategoryIcons[category]) {
    console.error(`Invalid category: ${category}`);
    return null;
  }
  const IconComponent = CategoryIcons[category].library;
  const iconName = CategoryIcons[category].name;
  const iconSize = CategoryIcons[category].size;

  return (
    <View style={styles.categoryButton}>
      <IconComponent
        name={iconName}
        size={iconSize}
        color={Colors.VerdeOscuro}
      />
      <Text style={styles.categoryButtonText}> {category}</Text>
    </View>
  );
};

const CategoriesContainer = ({ categories }) => {
  return (
    <View style={styles.categoriesContainer}>
      {categories.map((category) => (
        <CategoryButton key={category} category={category} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#34654B",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 3,
    marginTop: 5,
  },
  categoryButtonText: {
    color: "#34654B",
  },
});

export default CategoriesContainer;
