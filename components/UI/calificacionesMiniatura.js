import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../constants/Colors";

const { width } = Dimensions.get("window");

const widthBreakpoint = 392;
const horarioFontSize = width < widthBreakpoint ? 12 : 14;

const CalificacionesMiniatura = ({ calificaciones }) => {
  const average =
    calificaciones.reduce((sum, { calificacion }) => sum + calificacion, 0) /
    calificaciones.length;

    const averageFormatted = average.toFixed(1);
 
  return (
    <View style={styles.contenedorCalificacion}>
      <FontAwesome
        name="star"
        size={12}
        color={Colors.Amarillo}
        style={{ margin: 3 }}
      />
      <Text style={styles.calificacion}>{averageFormatted}</Text>
      <Text style={styles.calificacion}> ({calificaciones.length})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorCalificacion: {
    flexDirection: "row",
    alignItems: "center",
  },
  calificacion: {
    fontSize: horarioFontSize,
  },
});

export default CalificacionesMiniatura;
