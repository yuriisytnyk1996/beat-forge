import { Link } from "expo-router";
import { Text } from "@rneui/themed";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ExploreOption } from "@/features/explore/interfaces/explore-ui.interfaces";

interface Props {
  item: ExploreOption;
}

export const ExploreCard = ({ item }: Props) => (
  <Link href={item.href}>
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>{item.icon}</View>

      <View style={styles.title}>
        <Text style={styles.featureName}>{item.name}</Text>

        <Text style={styles.featureDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  </Link>
);

const styles = StyleSheet.create({
  container: {
    gap: 8,
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  icon: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    gap: 4,
  },
  featureName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  featureDescription: {
    color: "#6B7280",
    fontSize: 14,
  },
});
