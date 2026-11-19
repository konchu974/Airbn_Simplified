// /logements — liste Explorer
// D2B : les filtres VALIDÉS sont dans l'URL (/logements?ville=Rennes&prixMax=100).
// La liste et le compteur sont calculés à partir d'eux (données dérivées).
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import LogementCard from "../../../components/LogementCard";
import { logements } from "../../../data/logements";

export default function ExplorerScreen() {
  const { ville = "", prixMax = "" } = useLocalSearchParams();
  const max = Number(prixMax) || Infinity;
  const recherche = ville.trim().toLowerCase();

  const logementsFiltres = logements.filter(
    (l) => (!recherche || l.city.toLowerCase() === recherche) && l.price <= max
  );

  return (
    <FlatList
      data={logementsFiltres}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      ListHeaderComponent={
        <View style={styles.entete}>
          <Text style={styles.compteur}>
            {logementsFiltres.length} logement{logementsFiltres.length > 1 ? "s" : ""}
            {ville ? ` · ${ville}` : ""}
            {prixMax ? ` · ≤ ${prixMax} €` : ""}
          </Text>
          <Link href={{ pathname: "/filtres", params: { ville, prixMax } }} asChild>
            <Pressable style={styles.bouton}>
              <Text style={styles.boutonTexte}>Filtres</Text>
            </Pressable>
          </Link>
        </View>
      }
      renderItem={({ item }) => (
        <Link href={`/logements/${item.id}`} asChild>
          <Pressable>
            <LogementCard logement={item} />
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
  entete: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  compteur: { color: "gray", flex: 1 },
  bouton: { backgroundColor: "#FF5A5F", paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8 },
  boutonTexte: { color: "#fff", fontWeight: "bold" },
});
