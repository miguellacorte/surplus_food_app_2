import React from "react";
import { Text, View } from "react-native";

const TiempoDeRetiro = ({ dia, hora, textSize, containerSize }) => {
  const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    let period = +hours >= 12 ? "PM" : "AM";
    hours = +hours % 12 || 12; // convert "00" to "12"
    return `${hours}:${minutes} ${period}`;
  };

  const formattedHora = convertTo12HourFormat(hora);
  return (
    <View style={{ width: containerSize }}>
      <Text style={{ fontSize: textSize, color: "gray" }}>
        Retira {dia} entre las {formattedHora}
      </Text>
    </View>
  );
};

export default TiempoDeRetiro;
