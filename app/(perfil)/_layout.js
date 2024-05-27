import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(ajustes)" options={{}} />
      <Stack.Screen name="TusPedidos" options={{}} />
      <Stack.Screen name="ComoFunciona" options={{}} />
      <Stack.Screen name="CentroDeAyuda"  options={{}} />
    </Stack>
  );
}
