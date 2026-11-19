// /profil
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}>
      <Text>Mon profil</Text>
      <Link href="/profil/reglages" style={{ color: "#FF5A5F" }}>
        Réglages
      </Link>
      <Link href="/modal" style={{ color: "#FF5A5F" }}>
        Ouvrir la modale
      </Link>
    </View>
  );
}
