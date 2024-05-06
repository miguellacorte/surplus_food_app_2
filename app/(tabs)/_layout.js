import React, { useContext } from "react";
import { View } from "react-native";
import {CartContext} from "../../store/CartContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const iconSize = windowWidth > 500 ? 28 : 24;

export default function TabLayout() {
  const { cart } = useContext(CartContext);
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
        name="cart"
        options={{
          headerShown: false,
          title: "Carrito",
          tabBarIcon: ({ color, focused }) => (
            <View>
              <MaterialCommunityIcons
                size={iconSize}
                name={focused ? "cart" : "cart-outline"}
                color={color}
              />
              {cart.length > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: -6,
                    top: -3,
                    backgroundColor: "green",
                    borderRadius: 6,
                    width: 12,
                    height: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
