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
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const datosRestaurante = [
  {
    nombre: "El Coyuco",
    cocina: "Pollo en brasa y parrilla",
    distancia: "1.5",
    calificacion: "4.8",
    cantidadRevisiones: "121",
    ordenesCantidad: "32",
    horario: "Retira hoy entre las 10:30pm - 11:59pm",
    precioAntes: "$ 10,00",
    precioDespues: "$ 4,80",
    urlImagenLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d49a502485ec5cfa23e5bb59bc169df6a240c31ae56c86b3ad9ef8f1e5bb28ba?apiKey=64cf540a2469411fb888e6001ea1b7f2&",
    urlImagenPortada:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/164d420ddd7ad34c6edf2890f7912b900b98b29f58d00cd7cb13fba47b580fcb?apiKey=64cf540a2469411fb888e6001ea1b7f2&",
  },
];

const { width, height } = Dimensions.get("window");

const widthBreakpoint = 392;
const heightBreakpoint = 667;

const imagenRestauranteHeight = height < heightBreakpoint ? 160 : 180;
const logoStyleWidth = width < widthBreakpoint ? 70 : 90;
const horarioFontSize = width < widthBreakpoint ? 12 : 14;

const AddressItem = ({ address }) => (
  <View style={styles.addressContainer}>
    <Text style={styles.addressText}>{address}</Text>
  </View>
);

const DireccionRestaurant = () => {
  return (
    <View style={styles.DireccionContainer}>
      <FontAwesome
        name="map-marker"
        size={24}
        color={Colors.VerdeOscuro}
        style={{ bottom: 5 }}
      />
      <AddressItem address="Trans. 3, Qta Guio, con Av 3, Caracas 1060, Distrito Capital" />
    </View>
  );
};
const SectionTitle = ({ title }) => (
  <View style={styles.sectionTitleContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

const InfoBlock = ({ title, content, isLast }) => (
  <View style={isLast ? {} : styles.infoBlockContainer}>
    <Text style={styles.infoBlockTitle}>{title}</Text>
    <Text style={styles.infoBlockContent}>{content}</Text>
  </View>
);

const CategoryButton = ({ text }) => (
  <View style={styles.categoryButton}>
    <Text style={styles.categoryButtonText}>{text}</Text>
  </View>
);

const HeartIcon = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable onPress={() => setIsPressed(!isPressed)}>
      <FontAwesome
        size={12}
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
            <Text> {"<"} </Text>
          </ImageBackground>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Image
            resizeMode="cover"
            source={{ uri: datosRestaurante[0].urlImagenLogo }}
            style={styles.miniaturaRestaurante}
          />
          <View style={styles.containerTituloRestaurante}>
            <Text style={styles.restaurantName}>El Coyuco</Text>
            <HeartIcon />
          </View>
          <View>
            <DireccionRestaurant />
          </View>
          <View style={styles.divider} />
          <Text style={styles.distance}>1.5 Km de distancia</Text>
          <View>
            <View style={styles.contenedorCalificacion}>
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
            </View>
          </View>
          <SectionTitle title="Reseñas" />
          <View style={styles.categoriesContainer}>
            <CategoryButton text="Plato principal" />
            <CategoryButton text="Caja sorpresa" />
            <CategoryButton text="Postre" />
            <CategoryButton text="Otros" />
          </View>
          <SectionTitle title="Comida disponible" />
          <InfoBlock title="Plato de pollo" content="5 disponibles!" />
          <InfoBlock
            title="Retira hoy entre las 3:30 pm - 5:59PM"
            content="$ 10,00"
            isLast
          />
          <InfoBlock title="Caja sorpresa" content="Último disponible!" />
          <InfoBlock
            title="Retira hoy entre las 3:30 pm - 5:59PM"
            content="$ 7,80"
            isLast
          />
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
    bottom: "7.5%", //Dimension API: 5 for small screen
    right: 2,
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  containerTituloRestaurante: {
    bottom: "10%",
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
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addressText: {
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
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#34654B",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  categoryButtonText: {
    color: "#34654B",
  },
});

export default RestaurantPage;
