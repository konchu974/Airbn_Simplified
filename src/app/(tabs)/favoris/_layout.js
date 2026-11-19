// Pile de l'onglet Favoris : liste des favoris → fiche (D2A)
import { Stack } from "expo-router";

export default function FavorisLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Favoris" }} />
      <Stack.Screen
        name="[id]"
        options={{ title: "Logement" }}
        dangerouslySingular={(name, params) => params?.id}
      />
    </Stack>
  );
}
