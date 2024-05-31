import React from "react";
import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from "expo-router";


const windowWidth = Dimensions.get('window').width;
const iconSize = windowWidth * 0.04; // Adjust the multiplier as needed

const PerfilIcon = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.navigate('(perfil)')}
      >
        <FontAwesome6 name="user" size={iconSize} color={'black'} />
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
    backgroundColor: "rgba(105, 105, 105, 0.10)",
    padding: 8,
  },
});

export default PerfilIcon;
