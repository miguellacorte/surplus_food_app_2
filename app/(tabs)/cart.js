import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { CartContext } from "../../store/CartContext";
import Icon from "react-native-vector-icons/FontAwesome";
import TiempoDeRetiro from "../../components/UI/ContenedoresComida/TiempoDeRetiro";
import { Colors } from "../../constants/Colors";
import MediosPago from "../../components/UI/Checkout/MediosPago";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import carritoVacio from "../../assets/carritoVacio.png";

const { width, height } = Dimensions.get("window");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const widthBreakpoint = 392;
const heightBreakpoint = 667;
const horarioFontSize = width < widthBreakpoint ? 12 : 14;
const buttonRightMargin = width < widthBreakpoint ? "40%" : "37%";
const priceRightMargin = width < widthBreakpoint ? "13%" : "3%";
const buscarProductsMargin = height < heightBreakpoint ? 20 : 50;

const ItemSummary = ({ item, onIncrease, onDecrease, onDelete }) => {
  if (!item) {
    return null; // or a loading spinner
  }


  const handleIncrease = () => {
    if (item.quantity < item.cantidadDisponible) {
      onIncrease();
    } else {
      alert('No se pueden agregar más productos. Cantidad máxima alcanzada.');
    }
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onDecrease();
    }
  };

  //format code:
  const price = parseFloat(item.precioVenta) * item.quantity;
  const originalPrice = parseFloat(item.precioAntes) * item.quantity;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  const formattedOriginalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(originalPrice);

  return (
    <>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemName}>{item.nombre}</Text>
          <TiempoDeRetiro
            dia={item.diaRetiro}
            hora={item.horaRetiro}
            textSize={14}
            containerSize="70%"
          />
        </View>
        <View>
          <View style={{ right: priceRightMargin }}>
            <Text style={styles.originalPrice}>{formattedOriginalPrice}</Text>
            <Text style={styles.discountedPrice}>{formattedPrice}</Text>
          </View>
          <View
            style={{
              right: buttonRightMargin,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: 100,
              marginTop: 10,
              padding: 10,
              marginBottom: 10,
              marginRight: 10,
            }}
          >
            <TouchableOpacity onPress={onDelete}>
              <Icon
                name="trash"
                size={20}
                color="gray"
                style={{ marginRight: 5, bottom: 2 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleDecrease}
              style={styles.iconButton}
            >
              <Icon name="minus" size={12} color="#000" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              style={styles.iconButton}
            >
              <Icon name="plus" size={12} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const Cart = () => {
  const navigation = useNavigation();
  const { cart, addToCart, removeFromCart, decreaseQuantity } =
    useContext(CartContext);
  const [productos, setProductos] = useState(0);
  const [tarifaDeServicio, setTarifaDeServicio] = useState(0);
  const [total, setTotal] = useState(0);

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const newProductos = cart.reduce(
      (acc, item) => acc + parseFloat(item.precioVenta) * item.quantity,
      0
    );
    const newTarifaDeServicio = newProductos * 0.02;
    const newTotal = newProductos + newTarifaDeServicio;

    setProductos(newProductos);
    setTarifaDeServicio(newTarifaDeServicio);
    setTotal(newTotal);
  }, [cart]);

  return (
    <>
      <SafeAreaView style={styles.pageContainer}>
        <View>
          {cart.length === 0 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text style={styles.headerTitle}>Carrito vacío</Text>
              <Image
                source={carritoVacio}
                style={{ width: 250, height: 200, marginTop: 50 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  margin: 20,
                  color: "black",
                  marginTop: 50,
                }}
              >
                Actualmente no tienes ningún producto en el carrito! Para hacer
                un pedido, agrega productos al carrito.
              </Text>
              <TouchableOpacity
                style={styles.buscarButton}
                onPress={() => navigation.navigate("ordena")}
              >
                <Text
                  style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}
                >
                  Encontrar productos
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView style={{ marginHorizontal: 20 }}>
              <View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.pressable}
                  >
                    <AntDesign
                      name="left"
                      size={24}
                      color={Colors.VerdeOscuro}
                      style={{ marginBottom: 20 }}
                    />
                  </Pressable>
                  <Text style={styles.headerTitle}>Confirmar compra</Text>
                </View>
              </View>
              {cart.map((item, index) => (
                <ItemSummary
                  key={index.toString()}
                  item={item}
                  onIncrease={() => addToCart(item)}
                  onDecrease={() => decreaseQuantity(item)}
                  onDelete={() => removeFromCart(item)}
                />
              ))}
              <View style={styles.totalContainer}>
                <View style={styles.row}>
                  <Text style={styles.boldText}>Productos</Text>
                  <Text style={styles.boldText}>
                    {currencyFormat.format(productos)}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.boldText}>Tarifa de servicio </Text>
                  <Text style={styles.boldText}>
                    {currencyFormat.format(tarifaDeServicio)}
                  </Text>
                </View>

                <View style={styles.rowTotal}>
                  <Text style={styles.boldTotalText}>Total</Text>
                  <Text style={styles.boldTotalText}>
                    {currencyFormat.format(total)}
                  </Text>
                </View>
              </View>
              <View>
                <MediosPago />
              </View>
              <View style={{ alignItems: "center", marginTop: 35 }}>
                <Text style={{ color: "gray", fontSize: 9 }}>
                  Al confirmar tu pedido aceptas los términos y condiciones de
                  nuestra App.{" "}
                </Text>
                <TouchableOpacity style={styles.pagarButton}>
                  <Text
                    style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}
                  >
                    Pagar
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    height: windowHeight,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    left: width * 0.1,
  },
  headerTitle2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "flex-start",
    borderBottomWidth: 1,
  },
  iconButton: {
    borderWidth: 1,
    borderRadius: 20,
    width: windowWidth * 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  originalPrice: {
    fontSize: 14,
    textAlign: "right",
    textDecorationLine: "line-through",
  },
  discountedPrice: {
    fontSize: 18,
    textAlign: "right",
    color: Colors.VerdeOscuro,
    fontWeight: "bold",
  },
  totalContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rowTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  boldText: {
    fontSize: 16,
  },
  boldTotalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pagarButton: {
    width: "100%",
    backgroundColor: Colors.VerdeOscuro,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  buscarButton: {
    width: "80%",
    backgroundColor: Colors.VerdeOscuro,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: buscarProductsMargin,
  },
  pressable: {
    left: 0,
    padding: 10,
  },

});

export default Cart;
