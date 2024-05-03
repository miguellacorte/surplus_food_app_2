import { Stack } from "expo-router/stack";
import { UserProvider } from "../store/UserContext";

export default function AppLayout() {
  return (
    <UserProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Restaurants/calificaciones" options={{ headerShown: false }} />
      <Stack.Screen name="Restaurants/[id]" options={{ headerShown: false }} />
    </Stack>
    </UserProvider>
  );
}
