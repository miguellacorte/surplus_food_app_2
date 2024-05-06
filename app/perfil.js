import React, { useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../store/UserContext";

export default function Tab() {
  const { user } = useContext(UserContext);
  
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>  </Text>
      {user ? <Text>Bienvenido, {user.Nombre}</Text> : <Text>Loading...</Text>}
    </View>
  );
}