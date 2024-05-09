import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const CategoryIcons = {
  "Caja sorpresa": { library: AntDesign, name: "gift", size: 18 },
  "Plato principal": {
    library: MaterialCommunityIcons,
    name: "food-turkey",
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
  Desayuno: { library: MaterialIcons, name: "breakfast-dining", size: 18 },
  Panadería: { library: MaterialIcons, name: "bakery-dining", size: 20 },
  "Comida rápida": {
    library: MaterialCommunityIcons,
    name: "hamburger",
    size: 18,
  },
  
  
};

const CategoryButton = ({ category, isSelected, onSelect }) => {
  if (!CategoryIcons[category]) {
    console.error(`Invalid category: ${category}`);
    return null;
  }
  const IconComponent = CategoryIcons[category].library;
  const iconName = CategoryIcons[category].name;
  const iconSize = CategoryIcons[category].size;

  return (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        isSelected && { backgroundColor: Colors.VerdeOscuro },
      ]}
      onPress={() => onSelect(category)}
    >
      <IconComponent
        name={iconName}
        size={iconSize}
        color={isSelected ? "#FFFFFF" : Colors.VerdeOscuro}
      />
      <Text style={[styles.categoryButtonText, isSelected && { color: "#FFFFFF" }]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

const CategoriesContainer = ({ selectedCategories = [], onSelectCategory }) => {
  return (
    <View style={styles.categoriesContainer}>
      {Object.keys(CategoryIcons).map((category, index) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <CategoryButton
            key={index}
            category={category}
            isSelected={isSelected}
            onSelect={onSelectCategory}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.VerdeOscuro,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 3,
    marginTop: 5,
  },
  categoryButtonText: {
    color: "#34654B",
    color: Colors.VerdeOscuro,
    marginLeft:5,
  },
});

export default CategoriesContainer;
