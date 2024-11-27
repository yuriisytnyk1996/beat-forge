import { Avatar } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

interface Props {
  sourceUri: string;
}

export const ProfileAvatar = ({ sourceUri }: Props) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={150}
        rounded={true}
        source={{
          uri: sourceUri,
        }}
        containerStyle={{
          overflow: "hidden",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#0EF5E3",
    borderRadius: 100,
    padding: 5,
  },
});
