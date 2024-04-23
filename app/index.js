import { View } from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View>
        <Link href="(tabs)"> INTRO </Link>
      </View>
    </View>
  );
}
