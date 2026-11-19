// /filtres — modale de filtres (D2B)
// - les filtres EN COURS d'édition sont un état LOCAL à la modale
// - « Appliquer » les envoie à Explorer (dans l'URL de /logements)
// - « Annuler » et le retour système ferment sans rien changer
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function FiltresScreen() {
  const params = useLocalSearchParams();
  const [ville, setVille] = useState(params.ville ?? "");
  const [prixMax, setPrixMax] = useState(params.prixMax ?? "");

  function appliquer() {
    router.dismissTo({ pathname: "/logements", params: { ville: ville.trim(), prixMax } });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ville</Text>
      <TextInput style={styles.input} value={ville} onChangeText={setVille} placeholder="Rennes" autoCorrect={false} />

      <Text style={styles.label}>Prix maximum (€ / nuit)</Text>
      <TextInput style={styles.input} value={prixMax} onChangeText={setPrixMax} placeholder="100" keyboardType="number-pad" />

      <View style={styles.actions}>
        <Pressable onPress={() => router.back()} style={[styles.bouton, styles.annuler]}>
          <Text style={styles.annulerTexte}>Annuler</Text>
        </Pressable>
        <Pressable onPress={appliquer} style={styles.bouton}>
          <Text style={styles.boutonTexte}>Appliquer</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  label: { fontWeight: "bold", marginTop: 8 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, fontSize: 16, backgroundColor: "#fff" },
  actions: { flexDirection: "row", gap: 12, marginTop: 16 },
  bouton: { flex: 1, backgroundColor: "#FF5A5F", padding: 12, borderRadius: 8, alignItems: "center" },
  boutonTexte: { color: "#fff", fontWeight: "bold" },
  annuler: { backgroundColor: "#eee" },
  annulerTexte: { fontWeight: "bold" },
});
