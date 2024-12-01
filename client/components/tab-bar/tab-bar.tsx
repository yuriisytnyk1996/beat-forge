import { useTheme } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

import { tabsNavigationConfig } from "@/configs/tabs.configs";
import { TabBarLink } from "@/components/tab-bar-link/tab-bar-link";

export const TabBar = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.tabbar, { backgroundColor: theme.colors.black_50 }]}>
      {tabsNavigationConfig.map((config) => (
        <TabBarLink
          key={config.id}
          href={config.href}
          label={config.title}
          icon={config.icon}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
  },
});
