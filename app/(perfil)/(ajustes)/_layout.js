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
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="InformacionPersonal"  options={{}} />
      <Stack.Screen name="EditarInfoPersonal" options={{}} />
      <Stack.Screen name="Notificaciones" options={{}} />
      <Stack.Screen name="InformacionLegal" options={{}} />
    </Stack>
  );
}
