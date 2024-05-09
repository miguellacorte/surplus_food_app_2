import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCarousel from "../../components/UI/Image/ImageCarousel";
import RecomendadosParaTi from "../../components/IndexFoodContainers/RecomendadosParaTi";
import LlevateloAntesQueSeAcabe from "../../components/IndexFoodContainers/LlevateloAntesQueSeAcabe";
import RetirarParaCenar from "../../components/IndexFoodContainers/RetirarParaCenar";
import RetirarParaDesayuno from "../../components/IndexFoodContainers/RetirarParaDesayuno";
import Ubicacion from "../../components/UI/Ubicacion";
import ImageBanner from "../../components/UI/Image/ImageBanner";
import CajaSorpresa from "../../components/IndexFoodContainers/CajaSorpresa";
import CercaTuyo from "../../components/IndexFoodContainers/CercaTuyo";

const imageBanner1 = { uri: "https://source.unsplash.com/300x200/?promotion" };
const imageBanner2 = { uri: "https://source.unsplash.com/300x200/?promotion" };

const ghostSpacePaddingFix = "4%";
const ghostSpacePaddingFix2 = "8%";
const ghostSpacePaddingFix3 = "12%";
const ghostSpacePaddingFix4 = "18%";
const ghostSpacePaddingFix5 = "22%";
const ghostSpacePaddingFix6 = "26%";
const ghostSpacePaddingFix7 = "30%";



//Fix styling this container:
// components weird dimensioning
// container length

//Update restaurans page:
// if restaurant only has one product, then render a certain page, otherwise list products. 


export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar  />
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
            <ImageBanner imageUrl={imageBanner1}/>
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

          <View
            style={[styles.foodContainers, { bottom: ghostSpacePaddingFix7 }]}
          >
            <ImageBanner imageUrl={imageBanner2}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: "100%",
  },
  recommendationContainers: {
    marginTop: 20,
    padding: 0,
  },
  foodContainers: {
    marginTop: 20,
    height: 400,
  },
  scrollView: {
    marginTop: 0,
    height: "100%",
  },
});
