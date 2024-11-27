import { Tabs } from "expo-router";

import { TabBar } from "@/components/TabBar";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="extract"
        options={{
          title: "Extract",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
