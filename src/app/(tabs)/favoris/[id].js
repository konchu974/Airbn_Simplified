// /favoris/L03 — la même fiche, mais dans la pile de l'onglet Favoris :
// Retour ramène à Favoris, pas à Explorer.
import FicheLogement from "../../../components/FicheLogement";

export default function LogementFavoris() {
  return <FicheLogement retourVers="/favoris" />;
}
