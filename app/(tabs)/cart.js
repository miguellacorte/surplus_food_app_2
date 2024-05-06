import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { CartContext } from "../../store/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import TiempoDeRetiro from "../../components/UI/TiempoDeRetiro";

const { width } = Dimensions.get("window");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const widthBreakpoint = 392;
const heightBreakpoint = 667;
const horarioFontSize = width < widthBreakpoint ? 12 : 14;

const ItemSummary = ({ item, onIncrease, onDecrease, onDelete }) => {
    const [quantity, setQuantity] = useState(item.quantity || 1);
  
    const handleIncrease = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onIncrease();
    };
  
    const handleDecrease = () => {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        onDecrease();
      }
    };

    const price = parseFloat(item.precioVenta) * quantity;
    const originalPrice = parseFloat(item.precioAntes) * quantity;

    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  const formattedOriginalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(originalPrice);

  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemName}>{item.nombre}</Text>
        <TiempoDeRetiro
          dia={item.diaRetiro}
          hora={item.horaRetiro}
          textSize={12}
          containerSize="70%"
        />
      </View>
      <View>
        <View>
          <Text style={styles.originalPrice}>
          {formattedOriginalPrice}
          </Text>
          <Text style={styles.discountedPrice}>{formattedPrice}</Text>
        </View>
        <View
          style={{
            right: 48,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 100,
            marginTop: 20,
            padding: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={onDelete} >
            <Icon
              name="trash"
              size={22}
              color="#000"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDecrease} style={styles.iconButton}>
            <Icon name="minus" size={16} color="#000" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontStyle: "bold" }}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrease} style={styles.iconButton}>
            <Icon name="plus" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const Cart = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity } =
    useContext(CartContext);

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView>
        <View>
          <View>
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
        <View>
          {/* Order summary, payment methods, and billing address components */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#FFF",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
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
    fontSize: 16,
  },
  originalPrice: {
    textAlign: "right",
    textDecorationLine: "line-through",
    color: "#666",
  },
  discountedPrice: {
    textAlign: "right",
    color: "#E35940",
    fontWeight: "bold",
  },
  totalContainer: {
    marginTop: 20,
  },
  // Additional styles for order summary, payment methods, and billing address
});

export default Cart;
