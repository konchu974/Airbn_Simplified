import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
 
export default function Modale() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Ceci est une modale</Text>
 
      <Pressable onPress={() => router.back()} style={styles.bouton}>
        <Text style={styles.boutonTexte}>Fermer</Text>
      </Pressable>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20
},
  titre: {
    fontSize: 20,
    fontWeight: "bold"
},
  bouton: {
    backgroundColor: "#FF5A5F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
},
  boutonTexte: {
    color: "#fff",
    fontWeight: "bold"
},
});
 