import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesContainer from "./UI/CategoriesContainer";
import ContenedorComidaRestaurante from "./UI/ContenedorComidaRestaurante";
import { datosRestaurante } from "../data/datosRestaurante";

const { width, height } = Dimensions.get("window");

const widthBreakpoint = 392;
const heightBreakpoint = 667;

const imagenRestauranteHeight = height < heightBreakpoint ? 160 : 180;
const logoStyleWidth = width < widthBreakpoint ? 70 : 90;
const horarioFontSize = width < widthBreakpoint ? 12 : 14;
const bottomContainerMargin = height < heightBreakpoint ? "5%" : "7.5%";
const logoImageMarginBottom = height < heightBreakpoint ? 10 : 30;
const logoImageTop = height < heightBreakpoint ? 10 : 25;
const addressTextMargin = width < widthBreakpoint ? 8 : 12;

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

const HeartIcon = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable onPress={() => setIsPressed(!isPressed)}>
      <FontAwesome
        size={20}
        name={isPressed ? "heart" : "heart-o"}
        color={Colors.VerdeOscuro}
      />
    </Pressable>
  );
};

function RestaurantPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: datosRestaurante[0].urlImagenPortada }}
            style={[styles.restaurantImage, { padding: 0 }]}
          >
            <Text> {"< GO BACK"} </Text>
          </ImageBackground>
        </View>
        <View style={{ paddingHorizontal: 20, bottom: bottomContainerMargin }}>
          <Image
            resizeMode="cover"
            source={{ uri: datosRestaurante[0].urlImagenLogo }}
            style={styles.miniaturaRestaurante}
          />
          <View style={styles.containerTituloRestaurante}>
            <Text style={styles.restaurantName}>
              {datosRestaurante[0].nombre}
            </Text>
            <HeartIcon />
          </View>
          <DireccionRestaurant />
          <View style={[styles.divider, { bottom: 10 }]} />
          <Text style={styles.distance}>1.5 Km de distancia</Text>
          <View>
            <View style={styles.contenedorCalificacion}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "stretch",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FontAwesome
                    name="star"
                    size={12}
                    color={Colors.Amarillo}
                    style={{ margin: 3 }}
                  />
                  <Text style={styles.calificacion}>
                    {datosRestaurante[0].calificacion}
                  </Text>
                  <Text style={styles.cantidadRevisiones}>
                    {" "}
                    ({datosRestaurante[0].cantidadRevisiones})
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      left: "10%",
                    }}
                  >
                    <Ionicons
                      name="bag-check-outline"
                      size={14}
                      color="black"
                    />
                    <Text> {datosRestaurante[0].ordenesCantidad}+</Text>
                  </View>
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
                    <Text style={{ fontWeight: "600" }}>Reseñas</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <CategoriesContainer categories={datosRestaurante[0].categoria} />
          <View style={[styles.divider, { top: 10 }]} />

          <SectionTitle title="Comida disponible" />

          <ContenedorComidaRestaurante datosRestaurante={datosRestaurante} />
        </View>
      </ScrollView>
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
