import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

//ADD PRESSABLE / MODAL POSSIBILITY THAT DISPLAYS YOUR ADDRESSES 

const Ubicacion = () => (
  <View style={styles.locationCardContainer}>
    <View style={styles.iconContainer}>
      <Octicons name="location" size={18} color={Colors.VerdeOscuro} />
    </View>
    <View style={styles.locationTextContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[styles.locationTitle, { marginRight: 5 }]}>
          Ubicación actual
        </Text>
        <Octicons name="chevron-down" size={10} color="#878787" />
      </View>
      <Text style={styles.locationSubtitle}>5ta Av. de Los Palos Grandes</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 20,
  },
  locationCardContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 21,
    marginTop: 5,
    Width: 50,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 4,
    backgroundColor: "rgba(95, 158, 94, 0.10)",
    padding: 8,
  },
  locationIcon: {
    width: 18,
    height: 18,
  },
  locationTextContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  locationTitle: {
    fontSize: 12,
    color: "#878787",
    fontWeight: "400",
    letterSpacing: 0.16,
  },
  locationSubtitle: {
    marginTop: 4,
    color: "#101010",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default Ubicacion;
