// Layout racine : une pile qui contient les onglets et la modale
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="filtres"
        options={{ presentation: "modal", headerShown: true, title: "Filtres" }}
      />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", headerShown: true, title: "Ma modale" }}
      />
    </Stack>
  );
}
