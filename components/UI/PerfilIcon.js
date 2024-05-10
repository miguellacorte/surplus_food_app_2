import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useNavigation } from "expo-router";

const PerfilIcon = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.navigate('perfil')}
      >
        <FontAwesome6 name="user" size={20} color={Colors.VerdeOscuro} />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
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
});

export default PerfilIcon;
