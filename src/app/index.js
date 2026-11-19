// « / » n'a pas d'écran : on redirige vers l'onglet Explorer
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/logements" />;
}
