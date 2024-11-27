import { View, StyleSheet } from "react-native";

import { User } from "@/api/types/profile.types";
import { ProfileStats } from "@/features/profile/components/profile-stats/profile-stats";
import { ProfileAvatar } from "@/features/profile/components/profile-avatar/profile-avatar";
import { ProfileUserInfo } from "@/features/profile/components/profile-user-info/profile-user-info";

interface Props {
  user: User;
}

export const ProfileHeader = ({ user }: Props) => {
  return (
    <View style={styles.headerBackground}>
      <ProfileAvatar sourceUri={user.profileImage} />

      <ProfileUserInfo user={user} />

      <ProfileStats user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#1E1E1E",
    paddingBottom: 20,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
