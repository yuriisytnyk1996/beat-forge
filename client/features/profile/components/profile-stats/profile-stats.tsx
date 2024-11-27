import { StyleSheet, View } from "react-native";

import { User } from "@/api/types/profile.types";
import { ProfileStatsItem } from "@/features/profile/components/profile-stats-item/profile-stats-item";

interface Props {
  user: User;
}

export const ProfileStats = ({ user }: Props) => {
  return (
    <View style={styles.container}>
      <ProfileStatsItem
        label="Followers"
        value={user.followers}
      />

      <ProfileStatsItem
        label="Following"
        value={user.following}
      />

      <ProfileStatsItem
        label="Tracks"
        value={user.tracks}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
});
