import { ScrollView, View } from "react-native";
import ContenedorComidaPrincipal from "../../components/ContenedorComidaPrincipal";

export default function Tab() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      }}
    >
      <View style={{ marginRight: 20 }}>
        <ContenedorComidaPrincipal />
      </View>
      <View style={{ marginRight: 20 }}>
        <ContenedorComidaPrincipal />
      </View>
      {/* Wrap more components as needed */}
    </ScrollView>
  );
}