import { Stack } from "expo-router/stack";
import RestaurantPage from "./Restaurants/[id]";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="calificaciones" options={{ headerShown: false }} />
      <Stack.Screen name="Restaurants/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
