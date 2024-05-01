import { StyleSheet, View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCarousel from "../../components/UI/ImageCarousel";
import RecomendadosParaTi from "../../components/FoodContainers/RecomendadosParaTi";
import LlevateloAntesQueSeAcabe from "../../components/FoodContainers/LlevateloAntesQueSeAcabe";
import RetirarParaCenar from "../../components/FoodContainers/RetirarParaCenar";
import RetirarParaDesayuno from "../../components/FoodContainers/RetirarParaDesayuno";
import Ubicacion from "../../components/UI/Ubicacion";
import ImageBanner from "../../components/UI/ImageBanner";
import CajaSorpresa from "../../components/FoodContainers/CajaSorpresa";
import CercaTuyo from "../../components/FoodContainers/CercaTuyo";

const ghostSpacePaddingFix = "4%";
const ghostSpacePaddingFix2 = "8%";
const ghostSpacePaddingFix3 = "12%";
const ghostSpacePaddingFix4 = "18%";
const ghostSpacePaddingFix5 = "22%";
const ghostSpacePaddingFix6 = "26%";


//Fix styling this container:
  // components weird dimensioning
  // container length
//Fix retiro component


export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Ubicacion />
        </View>

        <View>
          <ImageCarousel />
        </View>

        <View style={styles.recommendationContainers}>
          <View style={styles.foodContainers}>
            <RecomendadosParaTi />
          </View>
          <View
            style={[styles.foodContainers, { bottom: ghostSpacePaddingFix }]}
          >
            <LlevateloAntesQueSeAcabe />
          </View>
          <View
            style={[styles.foodContainers, { bottom: ghostSpacePaddingFix2 }]}
          >
            <CajaSorpresa />
          </View>

          <View
            style={[styles.foodContainers, { bottom: ghostSpacePaddingFix3 }]}
          >
            <ImageBanner />
          </View>

          <View
            style={[styles.foodContainers, { bottom: ghostSpacePaddingFix4 }]}
          >
            <CercaTuyo />
          </View>

          <View
            style={[styles.foodContainers, { bottom: ghostSpacePaddingFix5 }]}
          >
            <RetirarParaCenar />
          </View>

          <View
            style={[styles.foodContainers, { bottom: ghostSpacePaddingFix6 }]}
          >
            <RetirarParaDesayuno />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  recommendationContainers: {
    marginTop: 20,
    padding: 0,
  },
  foodContainers: {
    marginTop: 20,
    height: 400,
    bottom: "auto",
  },
  scrollView: {
    marginTop: 0,
    height: "100%",
  },
});
