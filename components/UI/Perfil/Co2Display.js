import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function CO2Display({ user, setModalVisible }) {
  const [showCO2, setShowCO2] = useState(true);

  const totalCO2 = (
  user.Pedidos.reduce((total, pedido) => {
    const quantityForOrder = pedido.Productos.reduce((totalForOrder, producto) => {
      return totalForOrder + producto.cantidad;
    }, 0);
    return total + quantityForOrder;
  }, 0) * 1.3
).toFixed(2);

  const totalLiters = user.Pedidos.length * 405;

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCO2((prevShowCO2) => !prevShowCO2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TouchableOpacity
      style={[styles.columnContainer, { marginRight: "5%" }]}
      onPress={() => setModalVisible(true)}
    >
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        {showCO2 ? (
          <>
            <AntDesign name="cloudo" size={28} color="black" />
            <Text style={[styles.Text, { color: "black" }]}>Co2</Text>
            <View>
              <Text style={[styles.priceText, { color: "black" }]}>
                {totalCO2} kg
              </Text>
            </View>
          </>
        ) : (
          <>
            <Ionicons name="water" size={24} color="black" />
            <Text style={[styles.Text, { color: "black" }]}>Agua</Text>
            <View>
              <Text style={[styles.priceText, { color: "black" }]}>
                {totalLiters} L
              </Text>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  columnContainer: {
    width: "42%",
    height: 'auto',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Text: {
    marginVertical: 3,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  priceText: {
    marginVertical: 2,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
