import { ReactNode } from "react";
import { Href, Link } from "expo-router";
import { Text, useTheme } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

interface Props {
  label: string;
  icon: ReactNode;
  href: Href;
}

export const TabBarLink = ({ icon, label, href }: Props) => {
  const { theme } = useTheme();

  return (
    <Link
      href={href}
      style={styles.link}
    >
      <View style={styles.container}>
        {icon}

        <Text style={[styles.text, { color: theme.colors.white }]}>{label}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    flex: 1,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 12,
  },
});
