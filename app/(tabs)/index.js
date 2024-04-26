import { ScrollView, View, SafeAreaView, Dimensions } from "react-native";
import ContenedorComidaPrincipal from "../../components/ContenedorComidaPrincipal";
import ImageCarousel from "../../components/ImageCarousel";

// ADD SAFEAREAVIEW FOR ANDROID 
// MAKE CONTENERDORCOMIDAPRINCIPAL BIT SMALLER IN ANDROID 


export default function Tab() {
  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    console.log('ScrollView dimensions:', width, 'x', height);
  };
  return (
    
  


    <SafeAreaView style={{ flex:1 }}> 
      
      <ImageCarousel />


      <ScrollView
        style={{ height: 200}}
          horizontal
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            flexGrow: 1,
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

    </SafeAreaView>
  );
}