import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import ContenedorProductosRestaurante from "../../components/UI/ContenedoresComida/ContenedorProductosRestaurante";
import { datosRestaurante } from "../../data/datosRestaurante";
import CalificacionesMiniatura from "../../components/UI/ContenedoresComida/CalificacionesMiniatura";
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from "expo-router";
import BotonFavoritos from "../../components/UI/ContenedoresComida/BotonFavoritos";
import AgregarCarrito from "../../components/UI/Checkout/AgregarCarrito";
import { CartContext } from "../../store/CartContext";

const { width, height } = Dimensions.get("window");

const widthBreakpoint = 392;
const heightBreakpoint = 667;

const imagenRestauranteHeight = height < heightBreakpoint ? 160 : 180;
const logoStyleWidth = width < widthBreakpoint ? 70 : 90;
const horarioFontSize = width < widthBreakpoint ? 12 : 14;
const bottomContainerMargin = height < heightBreakpoint ? "5%" : "7%";
const logoImageMarginBottom = height < heightBreakpoint ? 10 : 30;
const logoImageTop = height < heightBreakpoint ? 10 : 25;
const addressTextMargin = width < widthBreakpoint ? 8 : 12;
const BotonFavoritosSize = width < widthBreakpoint ? "small" : "medium";
const extrSpaceSize = height < heightBreakpoint ? 50 : 30;

const AddressItem = ({ address }) => (
  <View style={styles.addressContainer}>
    <Text style={styles.addressText}>{address}</Text>
  </View>
);

const DireccionRestaurant = () => {
  return (
    <View style={styles.DireccionContainer}>
      <FontAwesome name="map-marker" size={16} color={Colors.VerdeOscuro} />
      <AddressItem address={datosRestaurante[0].direccion} />
      <Ionicons
        name="chevron-forward"
        size={24}
        color={Colors.VerdeOscuro}
        style={{ right: 16 }}
      />
    </View>
  );
};
const SectionTitle = ({ title }) => (
  <View style={styles.sectionTitleContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

function RestaurantPage() {
  const [pressedProductId, setPressedProductId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (productId) => {
    if (pressedProductId === productId) {
      setPressedProductId(null); // deselect the product if it's already selected
    } else {
      setPressedProductId(productId); // select the product
    }
  };

  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const idNumber = Number(id);

  const { addToCart } = useContext(CartContext);

  const restaurante = datosRestaurante.find((rest) => rest.id == id);

  if (!restaurante) {
    return <Text>Restaurant not found</Text>;
  }

  const productos = restaurante.Productos;

  const handleAddToCart = (productId) => {
    const productToAdd = productos.find((product) => product.id === productId);
    if (productToAdd) {
      addToCart(productToAdd);
      console.log("Added product to cart:", productToAdd);
      setModalVisible(true);
      setTimeout(() => setModalVisible(false), 2000); // Hide the modal after 2 seconds
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: restaurante.urlImagenPortada }}
            style={[styles.restaurantImage, { padding: 0 }]}
          >
            <View style={{ position: "absolute", top: 10, left: 10 }}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={{
                  borderRadius: 35,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: 10,
                }}
              >
                <Ionicons name="chevron-back" size={24} color="black" />
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        <View style={{ paddingHorizontal: 20, bottom: bottomContainerMargin }}>
          <Image
            resizeMode="cover"
            source={{ uri: restaurante.urlImagenLogo }}
            style={styles.miniaturaRestaurante}
          />
          <View style={styles.containerTituloRestaurante}>
            <Text style={styles.restaurantName}>{restaurante.nombre}</Text>
            <BotonFavoritos size={BotonFavoritosSize} restaurantId={idNumber} restaurantePage='True'/>
          </View>
          <DireccionRestaurant direccion={restaurante.direccion} />
          <View style={[styles.divider, { bottom: 10 }]} />
          <Text style={styles.distance}>1.5 Km de distancia</Text>
          <View>
            <View style={styles.contenedorCalificacion}>
              <CalificacionesMiniatura
                calificaciones={restaurante.calificaciones}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  left: "5%",
                }}
              >
                <Ionicons name="bag-check-outline" size={14} color="black" />
                <Text> {restaurante.ordenesCantidad}+</Text>
              </View>

              <View
                style={{
                  flexDirection: "row-reverse",
                  flex: 1,
                  marginLeft: 5,
                  width: 10,
                }}
              >
                <View style={{ borderBottomWidth: 1 }}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Restaurants/calificaciones", {
                        calificaciones: restaurante.calificaciones,
                      });
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>Reseñas</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.divider, { top: 10 }]} />

          <SectionTitle title="Comida disponible" />

          <ContenedorProductosRestaurante
            productosRestaurante={restaurante.Productos}
            handlePress={handlePress}
            pressedProductId={pressedProductId}
          />
          <View style={{ height: extrSpaceSize }}></View>
        </View>
      </ScrollView>
      {pressedProductId !== null && (
        <View style={{ alignItems: "center" }}>
          <AgregarCarrito
            restaurant={restaurante}
            productId={pressedProductId}
            onPress={() => handleAddToCart(pressedProductId)}
          />
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0)", // semi-transparent background
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
            }}
          >
            <Text>Modal is visible</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  restaurantImage: {
    width: "100%",
    height: imagenRestauranteHeight,
    minHeight: 90,
  },
  miniaturaRestaurante: {
    width: logoStyleWidth,
    height: logoStyleWidth,
    borderRadius: logoStyleWidth / 2,
    right: 2,
    marginBottom: logoImageMarginBottom,
    top: logoImageTop,
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  containerTituloRestaurante: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  DireccionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },

  addressContainer: {
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addressText: {
    right: addressTextMargin,
    fontSize: 14,
    color: "#34654B",
    fontWeight: "600",
  },
  distance: {
    fontSize: 16,
    marginBottom: 10,
  },
  contenedorCalificacion: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calificacion: {
    fontSize: horarioFontSize,
  },
  cantidadRevisiones: {
    fontSize: 12,
    marginLeft: 2,
  },
  sectionTitleContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoBlockContainer: {
    marginTop: 10,
  },
  infoBlockTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoBlockContent: {
    fontSize: 16,
  },
});

export default RestaurantPage;
