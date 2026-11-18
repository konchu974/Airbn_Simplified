import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import logements from "@/data/logementsData";

function Logement({ title, city, price, image }) {
  const [isFavorite, setIsFavorite] = useState(false);
 

  return (
    <Pressable
      onPress={() => {
        setIsFavorite(!isFavorite);
      }}
    >
      <View style={styles.card}>
        <Image style={styles.image} src={image} />
        <View style={styles.infos}>
          <Text style={styles.title} numberOfLines={2}>
            {isFavorite ? "★" : ""}
            {title}
          </Text>
          <Text style={styles.city}>{city}</Text>
        </View>
        <Text style={styles.price}>{price} $</Text>
      </View>
    </Pressable>
  );
}

export default function Index() {
   const [ville, setVille] = useState("");
  const logementsFiltres = ville
    ? logements.filter((l) => l.city.trim().toLowerCase().includes(ville.trim().toLowerCase()))
    : logements;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.research} value={ville} onChangeText={setVille} placeholder="Filtrer par ville"/>
      <FlatList
        data={logementsFiltres}
        renderItem={({ item }) => (
          <Logement
            title={item.title}
            city={item.city}
            price={item.price}
            image={item.image}
          />
        )}
        keyExtractor={(item) => String(item.id)}
      />
      {ville !== "" && (
        <Pressable style={styles.clearButton} onPress={() => setVille("")}>
          <Text style={styles.clearButtonText}>EFFACER</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
    width: "100%",
    borderRadius: 40,
    marginBottom: 20,
    padding: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 30,
  },
  infos: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  city: {
    textAlign: "center",
  },
  price: {
    flexShrink: 0,
  },
  research:{
    borderWidth: 1,
    borderRadius: 30,
    margin:10,
  },
  clearButton: {
    marginBottom: 40,
    backgroundColor: "red",
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: "center",
  },
  clearButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
