import { Text, StyleSheet, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Profil() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable onPress={() => router.push("/profil/modal")}>
        <Text style={styles.bouton}>hellooooooooooo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bouton: {
    backgroundColor: "red",
  
  },
});
