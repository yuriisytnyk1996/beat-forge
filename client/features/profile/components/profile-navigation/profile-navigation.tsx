import { FlatList, StyleSheet } from "react-native";

import { PROFILE_NAVIGATION_LINKS } from "@/features/profile/configs/profile-navigation.configs";
import { ProfileNavigationLink } from "@/features/profile/components/profile-navigation-link/profile-navigation-link";

export const ProfileNavigation = () => {
  return (
    <FlatList
      data={PROFILE_NAVIGATION_LINKS}
      renderItem={({ item }) => (
        <ProfileNavigationLink
          title={item.title}
          href={item.href}
        />
      )}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  content: {
    gap: 16,
  },
});
