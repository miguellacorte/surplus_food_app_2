import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCarousel from "../../components/ImageCarousel";
import RecomendadosParaTi from "../../components/FoodContainers/RecomendadosParaTi";

export default function Tab() {
  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    console.log("ScrollView dimensions:", width, "x", height);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageCarousel />
      <RecomendadosParaTi />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
