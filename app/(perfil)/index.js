import React, { useContext } from "react";
import { View, Text, StyleSheet, Platform, Image } from "react-native";
import { UserContext } from "../../store/UserContext";
import {
  FontAwesome6,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { View as SafeAreaContextView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TiempoDeRetiro from "../../components/UI/ContenedoresComida/TiempoDeRetiro";
import { datosRestaurante } from "../../data/datosRestaurante";

//CAMBIAR DATOS RESTAURANTE INPUT A CASCADED DATA

const SafeAreaView =
  Platform.OS === "android" ? SafeAreaContextView : RNSafeAreaView;

export default function index() {
  const { user } = useContext(UserContext);

  const orderedProducts = user.Pedidos.map((pedido) => {
    const restaurant = datosRestaurante.find((restaurant) =>
      restaurant.Productos.some(
        (product) => product.id === pedido.ProductoId
      )
    );

    if (restaurant) {
      const product = restaurant.Productos.find(
        (product) => product.id === pedido.ProductoId
      );

      return {
        product,
        restaurant
      };
    }

    return null;
  });

  const validOrderedProducts = orderedProducts.filter(
    (product) => product !== null
  );
  const lastOrderedProduct =
    validOrderedProducts[validOrderedProducts.length - 1];

  console.log(lastOrderedProduct);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        {user ? (
          <View style={styles.userContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome6
                name="face-smile"
                size={24}
                color={Colors.VerdeOscuro}
              />
              <Text style={styles.welcomeText}>Bienvenido, {user.Nombre}!</Text>
            </View>
            <View>
              <Ionicons
                name="settings-sharp"
                size={24}
                color={Colors.VerdeOscuro}
              />
            </View>
          </View>
        ) : (
          <Text style={styles.loadingText}>Loading...</Text>
        )}
        <View style={styles.contenedorPedidos}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={styles.priceText}>Tus pedidos:</Text>

            <View style={styles.contenedorPedidos}>
              {lastOrderedProduct && (
                <>
                  <Image
                    source={{ uri: lastOrderedProduct.restaurant.urlImagenLogo }}
                    style={styles.imageLogo}
                  />
                  <Text style={styles.restaurantName}>
                    {lastOrderedProduct.product.nombre}
                  </Text>
                  <TiempoDeRetiro
                    dia={lastOrderedProduct.product.diaRetiro}
                    hora={lastOrderedProduct.product.horaRetiro}
                    containerSize="100%"
                  />
                </>
              )}
            </View>

            <Text style={styles.Text}>Historial de pedidos</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={[styles.priceText, { marginTop: 20 }]}>
            {" "}
            Tu historial de ahorro:
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              marginVertical: 20,
            }}
          >
            <View style={[styles.columnContainer, { marginLeft: "5%" }]}>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="cash-plus"
                  size={28}
                  color={Colors.VerdeOscuro}
                />
                <Text style={styles.Text}>Dinero</Text>
                <Text style={styles.priceText}>25$</Text>
              </View>
            </View>

            <View style={[styles.columnContainer, { marginRight: "5%" }]}>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <AntDesign name="cloudo" size={28} color={Colors.VerdeOscuro} />
                <Text style={styles.Text}>Co2</Text>
                <View>
                  <Text style={styles.priceText}>2 kg</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.customerServiceContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome6
              name="question-circle"
              size={24}
              color={Colors.VerdeOscuro}
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Cómo funciona este app?</Text>
          </View>
        </View>

        <View style={styles.customerServiceContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="customerservice"
              size={24}
              color={Colors.VerdeOscuro}
            />
          </View>
          <View>
            <Text style={styles.welcomeText}>Centro de ayuda</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  imageLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#F4F4F4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3.84,
    elevation: 5,
  },
  customerServiceContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
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
  columnContainer: {
    width: "42%",
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
  welcomeText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.VerdeOscuro,
  },
  Text: {
    marginVertical: 3,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.VerdeOscuro,
  },
  priceText: {
    marginVertical: 2,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.VerdeOscuro,
  },
  loadingText: {
    fontSize: 16,
    color: Colors.VerdeOscuro,
  },
});
