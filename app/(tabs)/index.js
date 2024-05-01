import { StyleSheet, View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCarousel from "../../components/UI/ImageCarousel";
import RecomendadosParaTi from "../../components/FoodContainers/RecomendadosParaTi";
import LlevateloAntesQueSeAcabe from "../../components/FoodContainers/LlevateloAntesQueSeAcabe";

const ghostSpacePaddingFix = '10%'

export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <ImageCarousel />
        </View>

        <View style={styles.recommendationContainers}>
          <View style={styles.foodContainers}>
            <RecomendadosParaTi />
          </View>
          <View style={[styles.foodContainers, {bottom: ghostSpacePaddingFix}]}>
            <LlevateloAntesQueSeAcabe />
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  recommendationContainers: { 
    marginTop: 20,
    padding: 0
  },
  foodContainers: {
    height: 400,
    bottom: 'auto'
  },
  scrollView: {
    marginTop: 0,
  },
});
