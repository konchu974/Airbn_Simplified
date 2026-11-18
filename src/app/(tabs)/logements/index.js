import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import LogementCard from "@/components/logementCard";

export default function Index() {
  return (
      <View style={styles.container}>
        <Text>Logements Disponible</Text>
        <LogementCard />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
