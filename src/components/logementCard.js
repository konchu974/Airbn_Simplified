//  - titre et prix sur une même ligne (flexDirection: "row")
//  - flex: 1 sur le titre -> il prend la place restante, le prix reste visible
//  - numberOfLines={2} -> un titre long est tronqué avec « … »
//  - image en width 100 % + aspectRatio -> s'adapte à la largeur de l'écran
import { Image, StyleSheet, Text, View } from "react-native";

export default function LogementCard({ logement }) {
  return (
    <View style={styles.card}>
      {logement.image ? (
        <Image source={{ uri: logement.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>Pas de photo</Text>
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={2}>
          {logement.title}
        </Text>
        <Text style={styles.price}>{logement.price} €</Text>
      </View>

      <Text style={styles.city}>{logement.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  image: { width: "100%", aspectRatio: 16 / 9, borderRadius: 8 },
  placeholder: { backgroundColor: "#eee", alignItems: "center", justifyContent: "center" },
  placeholderText: { color: "#888" },
  row: { flexDirection: "row", alignItems: "flex-start", gap: 8, marginTop: 8 },
  title: { flex: 1, fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 16, fontWeight: "700" },
  city: { color: "gray", marginTop: 2 },
});
