import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Calificaciones = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const calificaciones = route.params.calificaciones;

  console.log(calificaciones);

  console.log(calificaciones);

  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const ratingsCount = [0, 0, 0, 0, 0];
    let totalRating = 0;

    calificaciones.forEach(({ calificacion }) => {
      ratingsCount[Math.floor(calificacion) - 1]++;
      totalRating += calificacion;
    });

    setRatings(ratingsCount);
    setAverageRating((totalRating / calificaciones.length).toFixed(1));
  }, [calificaciones]);

const RatingStar = ({ index }) => (
  <FontAwesome 
    name="star" 
    size={24} 
    color={index <= averageRating ? Colors.Amarillo : Colors.DarkGray} 
  />
);

  const RatingBar = ({ rating, count }) => (
    <View style={styles.ratingRow}>
      <Text style={styles.ratingText}>{rating}</Text>
      <View style={styles.ratingBarBackground}>
        <View style={[styles.ratingBarFill, { width: `${(count / calificaciones.length) * 100}%` }]} />
      </View>
    </View>
  );

const RatingViz = () => (
  <View style={styles.RatingVizContainer}>
    <Text style={styles.overallRating}>{averageRating}</Text>
    <View style={styles.starContainer}>
      {[...Array(5)].map((_, index) => (
        <RatingStar key={index} index={index + 1} />
      ))}
    </View>
    <Text style={styles.reviewCount}>({calificaciones.length} Reseñas)</Text>
    {[...Array(5)].map((_, index) => (
      <RatingBar key={index} rating={5 - index} count={ratings[5 - index - 1]} />
    ))}
  </View>
);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
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
          <Text style={styles.text}>Reseñas</Text>
        </View>
        <View></View>
        <RatingViz />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
  header: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
  },
  pressable: {
    position: "absolute",
    left: 0,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  RatingVizContainer: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
    width: "90%",
    marginHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 23,
    marginTop: 20,
  },
  overallRating: {
    alignSelf: "center",
    color: "#212121",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 32,
  },
  starContainer: {
    alignItems: "stretch",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  starImage: {
    width: 24,
    height: 24,
  },
  reviewCount: {
    alignSelf: "center",
    color: "#424242",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 12,
    marginTop: 5,
  },
  ratingRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
  },
  ratingText: {
    color: "#434E58",
    textAlign: "right",
    fontWeight: "600",
    fontSize: 16,
    width: 30,
  },
  ratingBarBackground: {
    borderRadius: 100,
    backgroundColor: "#D1D8DD",
    flex: 1,
    marginLeft: 8,
    height: 6,
  },
  ratingBarFill: {
    borderRadius: 100,
    backgroundColor: "#34654B",
    height: 6,
  },
});

export default Calificaciones;
