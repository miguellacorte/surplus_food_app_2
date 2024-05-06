import { Stack } from "expo-router/stack";
import { UserProvider } from "../store/UserContext";
import { CartProvider } from "../store/CartContext";

export default function AppLayout() {
  return (
    <UserProvider>
      <CartProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="perfil" options={{ headerShown: false }} />
          <Stack.Screen
            name="Restaurants/calificaciones"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Restaurants/[id]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout/CheckoutMenu"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout/ConfirmPayment"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout/ConfirmOrder"
            options={{ headerShown: false }}
          />
        </Stack>
      </CartProvider>
    </UserProvider>
  );
}
