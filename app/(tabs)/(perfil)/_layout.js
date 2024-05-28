import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Perfil" }}
      />
      <Stack.Screen
        name="(ajustes)"
        options={{
          title: "Ajustes",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="TusPedidos"
        options={{
          title: "Tus Pedidos",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="ComoFunciona"
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="CentroDeAyuda"
        options={{
          title: "Centro de Ayuda",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
}
