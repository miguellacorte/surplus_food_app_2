import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
} from "react-native";
import { UserContext } from "../../../store/UserContext";
import {
  FontAwesome6,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { View as SafeAreaContextView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import UserOrders from "../../../components/UI/Perfil/UserOrders";
import CO2Display from "../../../components/UI/Perfil/Co2Display";

const SafeAreaView =
  Platform.OS === "android" ? SafeAreaContextView : RNSafeAreaView;

export default function index() {
  const [modalVisible, setModalVisible] = useState(false);

  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  console.log("userPedidos:", user.Pedidos.length);

  const totalSavings = user.Pedidos.reduce((total, pedido) => {
    const savingsForOrder = pedido.Productos.reduce(
      (totalForOrder, producto) => {
        const savingsForProduct =
          (producto.precioAntes - producto.precioVenta) * producto.cantidad;
        return totalForOrder + savingsForProduct;
      },
      0
    );
    return total + savingsForOrder;
  }, 0).toFixed(2);

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
              <TouchableOpacity
                onPress={() => navigation.navigate("(ajustes)")}
              >
                <Ionicons
                  name="settings-sharp"
                  size={24}
                  color={Colors.VerdeOscuro}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Text style={styles.loadingText}>Loading...</Text>
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              minHeight: "100%", // Change height to minHeight
              padding: 0,
            }}
          >
            <UserOrders displayStyle="mini" />

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text
                style={[styles.priceText, { marginTop: 20, color: "black" }]}
              >
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
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <MaterialCommunityIcons
                      name="cash-plus"
                      size={28}
                      color="black"
                    />
                    <Text style={[styles.Text, { color: "black" }]}>
                      Dinero
                    </Text>
                    <Text style={[styles.priceText, { color: "black" }]}>
                      {totalSavings}$
                    </Text>
                  </View>
                </View>

                <CO2Display user={user} setModalVisible={setModalVisible} />

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{ alignSelf: "flex-end" }}
                      >
                        <AntDesign name="closecircle" size={24} color="black" />
                      </TouchableOpacity>
                      <Text style={styles.modalText}>
                        Según un estudio de Mérieux NutriSciences | Blonk
                        realizado en 2023, cada kg de comida desperdiciado
                        equivale a 810 litros de agua desechados o 2.7 kg de CO2
                        de impacto ambiental. {"\n"}
                        {"\n"}Estimamos que el impacto ambiental ahorrado
                        refiere a la cantidad de productos comprados por ti x
                        500 g de desecho ahorrado (hacemos un promedio de 500 g
                        de peso por producto comprado).
                      </Text>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ComoFunciona")}
            >
              <View style={styles.customerServiceContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome6
                    name="question-circle"
                    size={24}
                    color={Colors.VerdeOscuro}
                  />
                </View>
                <View>
                  <Text
                    style={[styles.welcomeText, { color: Colors.VerdeOscuro }]}
                  >
                    Cómo funciona este app?
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("CentroDeAyuda")}
            >
              <View style={styles.customerServiceContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AntDesign
                    name="customerservice"
                    size={24}
                    color={Colors.VerdeOscuro}
                  />
                </View>
                <View>
                  <Text
                    style={[styles.welcomeText, { color: Colors.VerdeOscuro }]}
                  >
                    Centro de ayuda
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const commonShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.12,
  shadowRadius: 3.84,
  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
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
    borderColor: "#E4E4E4",
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
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
    ...commonShadow,
  },
  columnContainer: {
    width: "42%",
    height: "auto",
    padding: 20,
    borderRadius: 25,
    backgroundColor: "white",
    ...commonShadow,
  },
  contenedorPedidos: {
    marginTop: 20,
    width: "92%",
    height: "auto",
    padding: 20,
    borderRadius: 25,
    backgroundColor: Colors.VerdeOscuro,
    ...commonShadow,
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
    color: "white",
  },
  restaurantName: {
    marginVertical: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  priceText: {
    marginVertical: 2,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  loadingText: {
    fontSize: 16,
    color: Colors.VerdeOscuro,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    marginTop: 10,
    textAlign: "center",
  },
});
