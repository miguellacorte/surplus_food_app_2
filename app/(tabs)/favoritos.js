import React, { useContext, useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import ContenedorComidaFavoritos from "../../components/UI/ContenedoresComida/ContenedorComidaFavoritos";
import { UserContext } from "../../store/UserContext"; // import UserContext
import { datosRestaurante } from "../../data/datosRestaurante";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";

import favoritosVacio from "../../assets/favortiosVacio.png";

const { width, height } = Dimensions.get("window");

const widthBreakpoint = 392;
const heightBreakpoint = 667;
const windowHeight = Dimensions.get("window").height;
const buscarProductsMargin = height < heightBreakpoint ? 50 : 100;

export default function Favoritos() {
  const { user, newFavorites, updateFavorites, loading } =
    useContext(UserContext); // access user data
  const [updatingFavorites, setUpdatingFavorites] = useState(false);
  // Find the restaurants in datosRestaurante that match the ids in user.RestaurantesFavoritos
  const favoriteRestaurants =
    !loading && newFavorites
      ? datosRestaurante.filter((restaurant) =>
          newFavorites.includes(restaurant.id)
        )
      : [];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.VerdeOscuro} />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Favoritos</Text>
          {favoriteRestaurants.length === 0 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <Image
                source={favoritosVacio}
                style={{ width: 200, height: 200 }}
              />
              <Text style={{ textAlign: "center", marginTop: 25 }}>
                Actualmente no tienes ningún restaurante favorito! Agrega tus
                restaurantes favoritos y mantente al día con las últimas ofertas
                y promociones .
              </Text>
              <Pressable
                style={styles.button}
                onPress={() => router.push("ordena")}
              >
                <Text style={styles.buttonText}>Buscar productos</Text>
              </Pressable>
            </View>
          ) : (
            favoriteRestaurants.map((restaurant, index) => (
              <View style={{ width: "100%" }} key={restaurant.id}>
                <Pressable
                  key={index}
                  style={styles.restaurant}
                  onPress={() =>
                    router.push({
                      pathname: "/Restaurants/[id]",
                      params: { id: restaurant.id },
                    })
                  }
                >
                  <ContenedorComidaFavoritos
                    id={restaurant.id}
                    nombre={restaurant.nombre}
                    distancia={restaurant.distancia}
                    calificaciones={restaurant.calificaciones}
                    urlImagenLogo={restaurant.urlImagenLogo}
                    urlImagenPortada={restaurant.urlImagenPortada}
                    Productos={restaurant.Productos}
                    width="larger"
                  />
                </Pressable>
              </View>
            ))
          )}
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  restaurant: {
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  button: {
    marginTop: buscarProductsMargin,
    width: "80%",
    backgroundColor: Colors.VerdeOscuro,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
