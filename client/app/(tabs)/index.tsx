import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenHead } from "@/components/screen-head/screen-head";
import { ExploreList } from "@/features/explore/components/explore-list/explore-list";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHead
        title="Explore"
        subtitle="Audio Tools & Features"
      />

      <ScrollView>
        <ExploreList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
