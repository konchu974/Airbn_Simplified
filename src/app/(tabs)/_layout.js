import { NativeTabs } from "expo-router/native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="logements">
        <NativeTabs.Trigger.Label>Logements</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="home" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="favoris">
        <NativeTabs.Trigger.Label>Favoris</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="heart" md="favorite" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profil">
        <NativeTabs.Trigger.Label>Profil</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
