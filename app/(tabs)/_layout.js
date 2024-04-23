import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const iconSize = windowWidth > 500 ? 28 : 24;

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.VerdeOscuro }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={iconSize} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ordena"
        options={{
          title: "Ordena",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={iconSize} name="list-ul" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
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
