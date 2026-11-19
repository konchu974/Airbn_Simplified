// Pile de l'onglet Explorer : liste → fiche
// dangerouslySingular : une même fiche (même id) n'apparaît qu'une fois dans l'historique.
// Si on la rouvre, l'ancienne copie est retirée de la pile (D2A).
import { Stack } from "expo-router";

export default function LogementsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Explorer" }} />
      <Stack.Screen
        name="[id]"
        options={{ title: "Logement" }}
        dangerouslySingular={(name, params) => params?.id}
      />
    </Stack>
  );
}
