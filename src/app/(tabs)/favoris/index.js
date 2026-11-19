// /favoris — favoris écrits en dur en attendant l'état partagé de J3
import { Link } from "expo-router";
import { FlatList, Pressable } from "react-native";
import LogementCard from "../../../components/LogementCard";
import { logements } from "../../../data/logements";

const FAVORIS = ["L03", "L07"];

export default function FavorisScreen() {
  const favoris = logements.filter((l) => FAVORIS.includes(l.id));

  return (
    <FlatList
      data={favoris}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <Link href={`/favoris/${item.id}`} asChild>
          <Pressable>
            <LogementCard logement={item} />
          </Pressable>
        </Link>
      )}
    />
  );
}
