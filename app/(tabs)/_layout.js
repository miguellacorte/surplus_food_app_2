import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const iconSize = windowWidth > 500 ? 28 : 24;

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.VerdeOscuro }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ordena"
        options={{
          headerShown: false,
          title: "Ordena",
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          headerShown: false,
          title: "Favoritos",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={iconSize}
              name={focused ? "heart" : "heart-o"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={iconSize}
              name={focused ? "user" : "user-o"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
