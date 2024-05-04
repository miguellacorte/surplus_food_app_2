import React, { useContext } from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import ContenedorComidaFavoritos from "../../components/UI/ContenedorComidaFavoritos";
import { UserContext } from "../../store/UserContext"; // import UserContext
import { datosRestaurante } from "../../data/datosRestaurante";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Tab() {
  const { user } = useContext(UserContext); // access user data

  // Find the restaurants in datosRestaurante that match the ids in user.RestaurantesFavoritos
  const favoriteRestaurants = user
    ? datosRestaurante.filter((restaurant) =>
        user.RestaurantesFavoritos.includes(restaurant.id)
      )
    : [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Favoritos</Text>
      {favoriteRestaurants.map((restaurant, index) => (
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
              nombre={restaurant.nombre}
              distancia={restaurant.distancia}
              calificaciones={restaurant.calificaciones}
              urlImagenLogo={restaurant.urlImagenLogo}
              urlImagenPortada={restaurant.urlImagenPortada}
              Productos={restaurant.Productos}
              width='larger'
            />
          </Pressable>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  restaurant: {
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
  },
});
