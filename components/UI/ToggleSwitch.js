import React, { useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
} from "react-native";
import { Colors } from "../../constants/Colors";

const ToggleSwitch = ({ active, options, onToggle }) => {
  const animation = useRef(new Animated.Value(options.indexOf(active))).current;

  const handlePress = (option) => {
    const index = options.indexOf(option);
    Animated.timing(animation, {
      toValue: index,
      duration: 200,
      useNativeDriver: false,
    }).start(() => onToggle(option));
  };

  const left = animation.interpolate({
    inputRange: [0, 1],
    outputRange: options.map(
      (_, index) => `${(index / options.length) * 100}%`
    ),
  });

  return (
    <View style={styles.navigation}>
      <Animated.View style={[styles.navButtonActive, { left }]} />
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navButton}
          onPress={() => handlePress(option)}
        >
          <Text
            style={[
              styles.navButtonText,
              active === option && styles.navButtonTextActive,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// rest of the code...

const styles = StyleSheet.create({
  navigation: {
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 8,
    backgroundColor: "rgba(95, 158, 94, 0.10)",
    display: "flex",
    flexDirection: "row",
    height: 35, // set a fixed height for the navigation bar
  },
  navButtonActive: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    backgroundColor: Colors.VerdeOscuro,
    borderRadius: 8,
  },
  navButton: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonText: {
    color: "#4F4F4F",
    textAlign: "center",
  },
  navButtonTextActive: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ToggleSwitch;
