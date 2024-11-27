import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

import { User } from "@/api/types/profile.types";

interface Props {
  user: User;
}

export const ProfileUserInfo = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <Text
        h4={true}
        style={styles.userName}
      >
        {user.name}
      </Text>
      <Text style={styles.userHandle}>{user.userName}</Text>
      <Text style={styles.userBio}>{user?.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },
  userName: {
    color: "white",
  },
  userHandle: {
    color: "#0EF5E3",
    fontSize: 16,
  },
  userBio: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
