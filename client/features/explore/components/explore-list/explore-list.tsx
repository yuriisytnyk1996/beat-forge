import { FlatList, StyleSheet } from "react-native";

import { exploreOptions } from "@/features/explore/configs/explore.configs";
import { ExploreCard } from "@/features/explore/components/explore-card/explore-card";

export const ExploreList = () => {
  return (
    <FlatList
      data={exploreOptions}
      renderItem={({ item }) => <ExploreCard item={item} />}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 120,
    gap: 8,
  },
});
