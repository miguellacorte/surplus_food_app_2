import React, { useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { UserContext } from "../../../store/UserContext";
import TiempoDeRetiro from "../../../components/UI/ContenedoresComida/TiempoDeRetiro";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constants/Colors";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

function UserOrders({ displayStyle }) {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  const orderedProducts = user.Pedidos.map((pedido) => {
    const totalPrecio = pedido.Productos.reduce((total, producto) => {
      return total + producto.cantidad * producto.precioVenta;
    }, 0);
    const totalItems = pedido.Productos.reduce((total, producto) => {
      return total + producto.cantidad;
    }, 0);
    return {
      Estado: pedido.Estado,
      CodigoRetiro: pedido.CodigoRetiro,
      FechaVenta: pedido.FechaVenta,

      product: pedido.Productos,
      restaurant: {
        id: pedido.IdRestaurante,
        urlImagenLogo: pedido.urlImagenLogo,
        nombre: pedido.NombreRestaurante,
      },
      totalPrecio,
      totalItems,
    };
  });

  if (displayStyle === "mini") {
    const lastOrderedProduct = orderedProducts[orderedProducts.length - 1];

    return (
      <TouchableOpacity onPress={() => navigation.navigate("TusPedidos")}>
        <View style={styles.contenedorPerfil}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={styles.tusPedidos}>Tus pedidos:</Text>
            <View
              style={[
                styles.contenedorPedidosMini,
                { backgroundColor: "white" },
              ]}
            >
              {lastOrderedProduct && (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    source={{
                      uri: lastOrderedProduct.restaurant.urlImagenLogo,
                    }}
                    style={styles.imageLogo}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.restaurantNameMini}>
                      {lastOrderedProduct.product[0].nombre}
                    </Text>
                    {lastOrderedProduct.Estado !== "entregado" && (
                      <TiempoDeRetiro
                        dia={lastOrderedProduct.product[0].diaRetiro}
                        hora={lastOrderedProduct.product[0].horaRetiro}
                        containerSize="80%"
                      />
                    )}
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (displayStyle === "fullDisplay") {
    return (
      <ScrollView>
        {orderedProducts.map((orderedProduct, index) => (
          <View
            key={index}
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <View style={styles.contenedorPedidos}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={[
                    styles.welcomeText,
                    {
                      color:
                        orderedProduct.Estado === "Entregado"
                          ? "black"
                          : Colors.VerdeOscuro,
                    },
                  ]}
                >
                  {orderedProduct.Estado}
                </Text>
              </View>
              <View key={index} style={styles.orderItem}>
                <Image
                  source={{ uri: orderedProduct.restaurant.urlImagenLogo }}
                  style={styles.imageLogo}
                />
                <View style={{ marginLeft: 10 }}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "95%",
                        marginVertical: 5,
                      }}
                    >
                      <Text style={styles.restaurantName}>
                        {orderedProduct.restaurant.nombre}{" "}
                        <Text style={styles.productName}>
                          - {orderedProduct.product[0].nombre}
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 5,
                      }}
                    >
                      <Text style={styles.itemDescription}>
                        ${" "}
                        {orderedProduct.totalPrecio
                          ? orderedProduct.totalPrecio.toFixed(2)
                          : "0.00"}{" "}
                        |
                      </Text>
                      <Text style={styles.itemDescription}>
                        {" "}
                        {orderedProduct.totalItems}{" "}
                        {orderedProduct.totalItems > 1
                          ? "productos"
                          : "producto"}
                      </Text>
                    </View>
                  </View>

                  {orderedProduct.Estado !== "Entregado" && (
                    <TiempoDeRetiro
                      dia={orderedProduct.product[0].diaRetiro}
                      hora={orderedProduct.product[0].horaRetiro}
                      containerSize="80%"
                      style={{ marginBottom: 0 }}
                    />
                  )}
                </View>
              </View>
              <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                <AntDesign name="star" size={12} color={Colors.VerdeOscuro} />
                  <Text style={styles.text}>Calificar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <FontAwesome
                    name="repeat"
                    size={12}
                    color={Colors.VerdeOscuro}
                  />
                  <Text style={styles.text}>Repetir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }

  return null;
}

export const styles = StyleSheet.create({
  contenedorPedidosMini: {
    marginTop: 20,
    width: "87%",
    height: "auto",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contenedorPedidos: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    height: "auto",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contenedorPerfil: {
    marginTop: 20,
    width: "85%",
    height: "auto",
    padding: 20,
    borderRadius: 25,
    backgroundColor: Colors.VerdeOscuro,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.VerdeOscuro,
  },
  Text: {
    marginVertical: 3,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  restaurantNameMini: {
    width: "70%",
    marginVertical: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  restaurantName: {
    marginVertical: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  productName: {
    marginVertical: 2,
    fontSize: 14,
    fontWeight: "bold",
  },
  itemDescription: {
    marginVertical: 2,
    fontSize: 14,
   marginBottom: 10,
  },
  priceText: {
    marginVertical: 2,
    fontSize: 20,
    color: "white",
  },
  tusPedidos: {
    marginVertical: 2,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  imageLogo: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  orderItem: {
    width: "90%",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "rgba(95, 158, 94, 0.10)",
    marginHorizontal: 5,
  },
  activeButton: { backgroundColor: Colors.VerdeOscuro },
  text: { color: "#4F4F4F", marginLeft: 5  },
  activeText: { color: "#FFFFFF", fontWeight: "bold" },
});

export default UserOrders;
