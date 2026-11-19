import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import logements from "@/data/logementsData";

export default function LogementDetail() {
  const { id } = useLocalSearchParams();
  const logement = logements.find((l) => String(l.id) === String(id));

  if (!logement) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Introuvable" }} />
        <Pressable
          onPress={() => router.replace("/logements")}
          style={styles.bouton}
        >
          <Text>Logement introuvable retourner en arriere</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: logement.title }} />
      <Image style={styles.image} src={logement.image} />
      <Text style={styles.title}>{logement.title}</Text>
      <Text style={styles.city}>{logement.city}</Text>
      <Text style={styles.price}>{logement.price} $</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 30,
  },
});
