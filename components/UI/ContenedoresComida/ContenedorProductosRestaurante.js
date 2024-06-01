import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TagDisponibilidadProducto from "./TagDisponibilidadProducto";
import TiempoDeRetiro from "./TiempoDeRetiro";
import { Colors } from "../../../constants/Colors";

const Precio = ({ precioAntes, precioDescuento }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedPrecioAntes = formatter.format(precioAntes);
  const formattedPrecioDescuento = formatter.format(precioDescuento);

  return (
    <View style={styles.discountContainer}>
      <Text style={styles.precioAntes}>{formattedPrecioAntes}</Text>
      <Text style={styles.precioDescuento}>{formattedPrecioDescuento}</Text>
    </View>
  );
};

function ContenedorProductosRestaurante({
  productosRestaurante,
  handlePress,
  pressedProductId,
}) {
  cantidadDisponible = productosRestaurante.length;

  return (
    <View>
      {productosRestaurante.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(item.id)}>
          <View
            key={item.id}
            style={[
              styles.mainContainer,
              item.id === pressedProductId && styles.pressed,
            ]}
          >
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>{item.nombre}</Text>
              <View>
                <TagDisponibilidadProducto
                  size="medium"
                  cantidadDisponible={item.cantidadDisponible}
                />
              </View>
            </View>
            <View style={styles.pickupInfoContainer}>
              <TiempoDeRetiro
                dia={item.diaRetiro}
                hora={item.horaRetiro}
                textSize={14}
                containerSize={"80%"}
              />
              <Precio
                precioAntes={item.precioAntes}
                precioDescuento={item.precioVenta}
              />
            </View>
            <View style={styles.divider} />
            <Text style={styles.productDescriptionTitle}>
              Descripción de producto:
            </Text>
            <Text style={styles.productDescriptionText}>
              {item.descripcion}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  mainContainer: {
    marginTop: 15,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor:'white',
    borderColor: "#E4E4E4",
    
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "700",
  },
  headerTitle: {
    color: "#212121",
    fontSize: 16,
    fontWeight: "700",
  },
  availabilityText: {
    color: "#FFF",
  },
  pickupInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 11,
    paddingRight: 4,
  },
  pickupInfoText: {
    color: "#78828A",
    margin: "auto 0",
    fontSize: 14,
    fontWeight: "500",
    width: "30%", //Dimensions API
  },
  discountContainer: {
    color: "#111",
    textAlign: "center",
    padding: "1px 0",
  },
  precioAntes: {
    textDecorationLine: "line-through",
    alignItems: "flex-end",
    textAlign: "right",
    justifyContent: "center",
    fontSize: 11,
    fontWeight: "600",
  },
  precioDescuento: {
    marginTop: 7,
    fontSize: 17,
    fontWeight: "900",
  },
  productDescriptionTitle: {
    color: "#000",
    fontWeight: "600",
  },
  productDescriptionText: {
    color: "#000",
    marginTop: 10,
    fontSize: 12,
    fontWeight: "500",
  },
  pressed: {
    borderWidth: 4,
    borderColor: Colors.VerdeOscuro,
  },
});

export default ContenedorProductosRestaurante;
