import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CartContext } from "../../../store/CartContext";
import { useNavigation } from "expo-router";
import { Alert } from "react-native";

const PriceTag = ({ price }) => (
  <View style={styles.priceContainer}>
    <Text style={styles.priceText}>{price}</Text>
  </View>
);

const CircleButton = ({ label }) => (
  <View style={styles.circleButtonContainer}>
    <Text style={{ fontWeight: "bold" }}>{label}</Text>
  </View>
);

const AddToCartButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.addToCartButtonContainer} onPress={onPress}>
    <Text style={styles.addToCartButtonText}>{text}</Text>
  </TouchableOpacity>
);

function AgregarCarrito({ restaurant, productId }) {
  const navigation = useNavigation();
  const { cart, addToCartWithCheck, clearCart } = useContext(CartContext);
  const product = restaurant.Productos.find(
    (product) => product.id === productId
  );

const handleAddToCart = () => {
  if (cart.length > 0 && cart[0].restaurant !== restaurant.id) {
    Alert.alert(
      "Disculpa! No puedes agregar productos de diferentes restaurantes al carrito.",
      "",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Crear nuevo carrito",
          onPress: () => {
            clearCart();
            addToCartWithCheck(product, restaurant.id);
            navigation.navigate("cart");
          },
        },
      ]
    );
  } else {
    addToCartWithCheck(product, restaurant.id);
    navigation.navigate("cart");
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <CircleButton label="x1" />
        <PriceTag price={`${product.precioVenta}$`} />
        <AddToCartButton
          text={"Agregar al carrito"}
          onPress={handleAddToCart}
        />
        <View>
          <FontAwesome
            name="chevron-right"
            size={12}
            color="black"
            style={{ color: "white", top: 1 }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "90%",
    bottom: 10,
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 50,
    backgroundColor: Colors.VerdeOscuro,
    padding: 10,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  priceText: {
    color: "#FFF",
  },
  circleButtonContainer: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    padding: "0 12px",
  },
  addToCartButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  addToCartButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default AgregarCarrito;
