// Fiche d'un logement, partagée par les piles Explorer et Favoris (D2A).
// `retourVers` : où aller quand il n'y a pas d'historique (ouverture directe).
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { logements } from "../data/logements";

export default function FicheLogement({ retourVers }) {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const logement = logements.find((l) => l.id === id);

  function retour() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace(retourVers);
    }
  }

  if (!logement) {
    return (
      <View style={styles.introuvable}>
        <Stack.Screen options={{ title: "Introuvable" }} />
        <Text style={styles.titre}>Logement introuvable</Text>
        <Text style={styles.gris}>Aucun logement ne porte l’identifiant « {id} ».</Text>
        <Pressable onPress={() => router.replace(retourVers)} style={styles.bouton}>
          <Text style={styles.boutonTexte}>Retour</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: logement.city }} />
      {logement.image ? (
        <Image source={{ uri: logement.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.gris}>Pas de photo</Text>
        </View>
      )}
      <Text style={styles.titre}>{logement.title}</Text>
      <Text style={styles.prix}>{logement.price} € / nuit</Text>
      <Text style={styles.description}>{logement.description}</Text>
      <Pressable onPress={retour} style={styles.bouton}>
        <Text style={styles.boutonTexte}>Retour</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 8 },
  image: { width: "100%", aspectRatio: 16 / 9, borderRadius: 8 },
  placeholder: { backgroundColor: "#eee", alignItems: "center", justifyContent: "center" },
  titre: { fontSize: 20, fontWeight: "bold" },
  prix: { fontSize: 18 },
  description: { fontSize: 16, lineHeight: 22, color: "#333" },
  gris: { color: "gray" },
  introuvable: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, gap: 12 },
  bouton: { backgroundColor: "#FF5A5F", paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, alignSelf: "center", marginTop: 8 },
  boutonTexte: { color: "#fff", fontWeight: "bold" },
});
