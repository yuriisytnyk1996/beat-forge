import { Tabs } from "expo-router";

import { TabBar } from "@/components/tab-bar/tab-bar";

export default function TabLayout() {
  return (
    <Tabs tabBar={() => <TabBar />}>
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
