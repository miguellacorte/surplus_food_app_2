import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const Calificaciones = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const calificaciones = route.params.calificaciones;
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [filteredCalificaciones, setFilteredCalificaciones] =
    React.useState(calificaciones);

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

  const filterByDate = () => {
    const sorted = [...calificaciones].sort(
      (a, b) => new Date(b.Fecha) - new Date(a.Fecha)
    );
    setFilteredCalificaciones(sorted);
  };

  const UserRating = ({ calificacion }) => {
    const integerPart = Math.floor(calificacion.calificacion);
    const fractionalPart = calificacion.calificacion - integerPart;

    return (
      <View style={styles.UserRatingContainer}>
        <View style={styles.userInfo}>
          <View style={styles.nameDate}>
            <Text style={styles.userName}>{calificacion.Nombre}</Text>
            <Text style={styles.userDate}>{calificacion.Fecha}</Text>
          </View>
          <View style={styles.iconContainer}>
            {[...Array(5)].map((_, index) => {
              let iconName;
              if (index < integerPart) {
                iconName = "star";
              } else if (index === integerPart && fractionalPart >= 0.5) {
                iconName = "star-half-o";
              } else {
                iconName = "star-o";
              }
              return (
                <FontAwesome
                  key={index}
                  name={iconName}
                  size={24}
                  color={Colors.Amarillo}
                />
              );
            })}
          </View>

          <Text style={styles.userDescription}>{calificacion.comentario}</Text>
        </View>
      </View>
    );
  };

  const integerPart = Math.floor(averageRating);
  const fractionalPart = averageRating - integerPart;
  const RatingStar = ({ index }) => {
    if (index <= integerPart) {
      return <FontAwesome name="star" size={24} color={Colors.Amarillo} />;
    } else if (index === integerPart + 1 && fractionalPart >= 0.5) {
      return (
        <FontAwesome name="star-half-o" size={24} color={Colors.Amarillo} />
      );
    } else {
      return <FontAwesome name="star-o" size={24} color={Colors.DarkGray} />;
    }
  };

  const RatingBar = ({ rating, count }) => (
    <View style={styles.ratingRow}>
      <Text style={styles.ratingText}>{rating}</Text>
      <View style={styles.ratingBarBackground}>
        <View
          style={[
            styles.ratingBarFill,
            { width: `${(count / calificaciones.length) * 100}%` },
          ]}
        />
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
        <RatingBar
          key={index}
          rating={5 - index}
          count={ratings[5 - index - 1]}
        />
      ))}
    </View>
  );
  const filterByRating = () => {
    const sorted = [...calificaciones].sort(
      (a, b) => b.calificacion - a.calificacion
    );
    setFilteredCalificaciones(sorted);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.pressable}
            >
              <AntDesign
                name="left"
                size={24}
                color='black'
                style={{ marginBottom: 20 }}
              />
            </Pressable>
            <Text style={styles.text}>Reseñas</Text>
          </View>
          <RatingViz />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={styles.containerBoton}
            onPress={filterByRating}
          >
            <View style={styles.textContainer}>
              <Text style={styles.label}>Ordernar</Text>
            </View>
            <Icon
              name="star"
              size={24}
              color={Colors.Amarillo}
              style={styles.starIconFull}
            />
            <Icon
              name="keyboard-arrow-down"
              size={24}
              color="#000"
              style={styles.starIconHalf}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerBoton}
            onPress={filterByDate}
          >
            <View style={styles.textContainer}>
              <Text style={styles.label}>Fecha</Text>
            </View>
            <Icon
              name="keyboard-arrow-down"
              size={24}
              color="#000"
              style={styles.starIconHalf}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredCalificaciones}
          renderItem={({ item }) => <UserRating calificacion={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: "white",
  },
  header: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
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
    right: 10,
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
  UserRatingContainer: {
    marginHorizontal: 20,
    borderBottomWidth: 0.25,
  },

  userInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    wdith: "100%",
  },
  nameDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    color: "#171725",
    fontSize: 18,
    fontWeight: "600",
  },
  iconContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  userDate: {
    color: "#9CA4AB",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
  userDescription: {
    color: "#171725",
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
  containerBoton: {
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    fontSize: 16,
    color: "#434E58",
    fontWeight: "500",
    padding: 10,
    marginVertical: 10,
    marginRight: 10,    
  },
  textContainer: {
    borderRadius: 50,
  },
  label: {
    fontSize: 16,
  },
  starIconFull: {
    width: 24,
  },
  starIconHalf: {
    width: 24,
  },
});

export default Calificaciones;
