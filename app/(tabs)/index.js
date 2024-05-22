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
import MenuCategorias from "../../components/UI/MenuCategorias";
// import PerfilIcon from "../../components/UI/PerfilIcon";

//CORREGIR DISTANCIA ENTRE CONTENEDORES

const imageBanner1 = { uri: "https://source.unsplash.com/300x200/?promotion" };
const imageBanner2 = { uri: "https://source.unsplash.com/300x200/?promotion" };

export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.scrollView}>
        <View>
          <Ubicacion />
        </View>

        <View>
          <ImageCarousel />
        </View>
        <View>
          <MenuCategorias />
        </View>

        <View>
          <View style={styles.foodContainers}>
            <RecomendadosParaTi />
          </View>
          <View style={styles.foodContainers}>
            <LlevateloAntesQueSeAcabe />
          </View>
          <View style={styles.foodContainers}>
            <CajaSorpresa />
          </View>
          <View style={styles.foodContainers}>
            <ImageBanner imageUrl={imageBanner1} />
          </View>
          <View style={styles.foodContainers}>
            <CercaTuyo />
          </View>
          <View style={styles.foodContainers}>
            <RetirarParaCenar />
          </View>
          <View style={styles.foodContainers}>
            <RetirarParaDesayuno />
          </View>
          <View style={styles.foodContainers}>
            <ImageBanner imageUrl={imageBanner2} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
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
