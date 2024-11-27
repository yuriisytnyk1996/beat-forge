import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { USER_MOCK_DATA } from "@/mocks/profile.mocks";
import { ProfileHeader } from "@/features/profile/components/profile-header/profile-header";
import { ProfileNavigation } from "@/features/profile/components/profile-navigation/profile-navigation";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader user={USER_MOCK_DATA} /> 

        <ProfileNavigation />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
});
