import { Drawer } from "expo-router/drawer";

export default function ProfilLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Profil" }} />
      <Drawer.Screen name="reglages" options={{ title: "Réglages" }} />
    </Drawer>
  );
}
