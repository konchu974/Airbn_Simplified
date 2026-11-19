// /modal — écran présenté en modale (voir src/app/_layout.js)
import { router } from "expo-router";
import { Text, View } from "react-native";
import Button from "../components/Button";

export default function ModalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 18 }}>Ceci est une modale</Text>
      <Button title="Fermer" onPress={() => router.back()} />
    </View>
  );
}
