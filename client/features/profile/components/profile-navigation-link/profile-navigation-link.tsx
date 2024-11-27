import { Text } from "@rneui/themed";
import { Href, Link } from "expo-router";
import { StyleSheet, View } from "react-native";

interface Props {
  href: Href;
  title: string;
}

export const ProfileNavigationLink = ({ href, title }: Props) => (
  <Link
    href={href}
    style={styles.container}
  >
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>

      {/* TODO: replace by icon */}
      <Text style={styles.icon}>›</Text>
    </View>
  </Link>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  content: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    color: "#0EF5E3",
    fontSize: 24,
    fontWeight: "bold",
  },
});
