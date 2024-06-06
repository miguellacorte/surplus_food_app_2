import { Stack } from "expo-router/stack";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="calificaciones" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
