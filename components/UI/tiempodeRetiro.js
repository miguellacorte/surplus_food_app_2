import React from "react";
import { Text, View } from "react-native";

const TiempoDeRetiro = ({ dia, hora, textSize, containerSize }) => {
  return (
    <View style={{width: containerSize}}>
    <Text
      style={{ fontSize: textSize, color: "gray",  }}
    >
      Retira {dia} entre las {hora}
    </Text>
    </View>
  );
};

export default TiempoDeRetiro;
