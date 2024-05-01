import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageWidth = windowWidth - 40;
const dynamicHeight = windowHeight < 667 ? 130 : 175;

const ImageBanner = () => {
  const image = { uri: "https://source.unsplash.com/300x200/?promotion" };

  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    height: dynamicHeight,
  },
  image: {
    width: imageWidth,
    height: dynamicHeight,
    resizeMode: "cover",
    borderRadius: 15,
  },
});

export default ImageBanner;