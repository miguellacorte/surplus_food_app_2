import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../constants/Colors";

const iconName = "chevron-forward";

const DatosFacuracion = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>Datos de Facturación</Text>
      </View>
      <View style={styles.paymentMethodSection}>

        <View style={styles.sectionItem}>
          <View style={styles.itemTextContainer2}>
            <Text>Nombre cliente</Text>
          </View>
          <Ionicons name={iconName} size={18} color="#000" />
        </View>
        <View style={{   borderBottomWidth: 0.5}}></View>
        <View style={styles.sectionItem}>
          <View style={styles.itemTextContainer2}>
            <Text>Cédula</Text>
          </View>
          <Ionicons name={iconName} size={18} color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    maxWidth: 378,
    flexDirection: "column",
    alignItems: "stretch",
    fontWeight: "600",
    paddingVertical: 20,
  },
  header: {
    color: "#000",
    width: "100%",
    fontSize: 20,
    lineHeight: "101%",
  },
  paymentMethodSection: {
    borderRadius: 6,
    borderColor: "rgba(135, 135, 135, 1)",
    borderStyle: "solid",
    borderWidth: 1,
 
    marginTop: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 14,

  },
  sectionItem: {
    justifyContent: "space-between",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    color: "#E35940",
    marginBottom: 10,
    marginTop: 10,  
    marginHorizontal: 5,
  },
  itemTextContainer: {
    color: Colors.Rojo,
  },
  itemTextContainer2: {},
  icon: {
    alignSelf: "start",
    position: "relative",
    width: 20,
    flexShrink: 0,
    aspectRatio: "1",
  },
});

export default DatosFacuracion;
