import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

interface Props {
  label: string;
  value: number;
}

export const ProfileStatsItem = ({ label, value }: Props) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  statBox: {
    alignItems: "center",
    padding: 10,
  },
  statValue: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
  },
});
