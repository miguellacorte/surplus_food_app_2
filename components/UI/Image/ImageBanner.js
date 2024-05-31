import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageWidth = windowWidth - 40 ;
const dynamicHeight = windowHeight < 667 ? 130 : 175;

const ImageBanner = ({imageUrl}) => {
  

  return (
    <View style={styles.imageContainer}>
      <Image source={imageUrl} style={styles.image} resizeMode="contain"/>
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