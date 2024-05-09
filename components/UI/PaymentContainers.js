import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome6,
  MaterialIcons
} from "@expo/vector-icons";

import { Colors } from "../../constants/Colors";

const PaymentIcons = {
  Cash: {
    library: MaterialCommunityIcons,
    name: "cash",
    size: 24,
    color: "green",
  },
  Tarjeta: { library: AntDesign, name: "creditcard", size: 24, color: "black" },
  "Pago Móvil": {
    library: MaterialIcons,
    name: "send-to-mobile",
    size: 24,
    color: "blue",
  },
  Transferencia: {
    library: FontAwesome6,
    name: "money-bill-transfer",
    size: 24,
    color: "black",
  },
};

const PaymentButton = ({ method, isSelected, onSelect }) => {
  if (!PaymentIcons[method]) {
    console.error(`Invalid payment method: ${method}`);
    return null;
  }
  const IconComponent = PaymentIcons[method].library;
  const iconName = PaymentIcons[method].name;
  const iconSize = PaymentIcons[method].size;
  const iconColor = PaymentIcons[method].color;

  return (
    <TouchableOpacity
      style={[
        styles.paymentButton,
        isSelected && { backgroundColor: iconColor },
        { borderColor: iconColor },
      ]}
      onPress={() => onSelect(method)}
    >
      <IconComponent
        name={iconName}
        size={iconSize}
        color={isSelected ? "#FFFFFF" : iconColor}
      />
      <Text
        style={[styles.paymentButtonText, { color: isSelected ? "#FFFFFF" : iconColor }]}
      >
        {method}
      </Text>
    </TouchableOpacity>
  );
};

const PaymentContainers = ({ selectedMethods = [], onSelectMethod }) => {
  return (
    <View style={styles.paymentMethodsContainer}>
      {Object.keys(PaymentIcons).map((method, index) => {
        const isSelected = selectedMethods.includes(method);
        return (
          <PaymentButton
            key={index}
            method={method}
            isSelected={isSelected}
            onSelect={onSelectMethod}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paymentMethodsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  paymentButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 3,
    marginTop: 5,
  },
  paymentButtonText: {
    color: Colors.VerdeOscuro,
    marginLeft: 5,
  },
});

export default PaymentContainers;
