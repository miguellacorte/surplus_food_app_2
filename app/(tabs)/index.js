import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView as RNSafeAreaView,
  Platform,
} from "react-native";
import { SafeAreaView as SafeAreaContextView } from "react-native-safe-area-context";
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
import PerfilIcon from "../../components/UI/PerfilIcon";

const SafeAreaView =
  Platform.OS === "android" ? SafeAreaContextView : RNSafeAreaView;

const imageBanner1 = { uri: "https://source.unsplash.com/300x200/?promotion" };
const imageBanner2 = { uri: "https://source.unsplash.com/300x200/?promotion" };

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.section1}>
          <Ubicacion />
          <PerfilIcon />
        </View>
        <View style={styles.section}>
          <ImageCarousel />
        </View>
        <View style={styles.section}>
          <MenuCategorias />
        </View>
        <View style={styles.section}>
          <RecomendadosParaTi />
        </View>
        <View style={styles.section}>
          <LlevateloAntesQueSeAcabe />
        </View>
        <View style={styles.section}>
          <CajaSorpresa />
        </View>
        <View style={styles.section}>
          <ImageBanner imageUrl={imageBanner1} />
        </View>
        <View style={styles.section}>
          <CercaTuyo />
        </View>
        <View style={styles.section}>
          <RetirarParaCenar />
        </View>
        <View style={styles.section}>
          <RetirarParaDesayuno />
        </View>
        <View style={styles.section}>
          <ImageBanner imageUrl={imageBanner2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 10,
  },
  section: {
    marginVertical: 10,
  },
  section1: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
});
