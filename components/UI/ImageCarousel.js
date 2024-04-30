import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// IMPROVE ON CLICK FUNCTIONALITY 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const carouselWidth = windowWidth - 20;
const imageWidth = carouselWidth;
const dynamicHeight = windowHeight < 667 ? 130 : 175;
const dynamicLineHeight = windowWidth < 429 ? 4 : 5;
const topMargin = windowWidth < 429 ? "5%" : "7%";

const ImageCarousel = () => {
  let interval = null;
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { uri: "https://source.unsplash.com/300x200/?promotion" },
    { uri: "https://source.unsplash.com/300x200/?sale" },
    { uri: "https://source.unsplash.com/300x200/?discount" },
    { uri: "https://source.unsplash.com/300x200/?offer" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 2750);

    return () => clearInterval(interval);
  }, []);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        x: index * carouselWidth,
        animated: true,
      });
    }
  };

  const onScroll = (event) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / carouselWidth
    );
    setActiveIndex(newIndex);
  };

  const renderLines = () => {
    return (
      <View style={styles.linesContainer}>
        {images.map((_, index) => (
          <View key={index} style={{}}>
            <TouchableOpacity
              key={index}
              style={[styles.line, activeIndex === index && styles.activeLine]}
              onPress={() => scrollToIndex(index)}
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView
          ref={carouselRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {images.map((image, index) => (
            <View key={index} style={{ borderRadius: 15 }}>
              <Image
                key={index}
                source={image}
                style={[styles.image, styles.rounded]}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      {renderLines()}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    height: dynamicHeight,
  },
  scrollViewWrapper: {
    overflow: "hidden",
    borderRadius: 15,
  },
  scrollViewContainer: {
    paddingHorizontal: 5,
  },
  linesContainer: {
    position: "absolute",
    top: topMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    width: carouselWidth,
    paddingHorizontal: 15,
  },
  line: {
    height: dynamicLineHeight,
    width: (carouselWidth - 80) / 4, // Adjust width according to number of lines
    backgroundColor: "grey",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeLine: {
    backgroundColor: "white",
  },
  image: {
    width: imageWidth,
    height: dynamicHeight,
    resizeMode: "cover",
  },
  rounded: {
    borderRadius: 15,
  },
});

export default ImageCarousel;
