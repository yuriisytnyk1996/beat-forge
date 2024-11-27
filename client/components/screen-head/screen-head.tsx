import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  subtitle: string;
}

export const ScreenHead = ({ title, subtitle }: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#6B7280",
    fontSize: 16,
  },
});
