import "react-native-reanimated";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

import { FONTS } from "@/configs/fonts.configs";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFontsLoader } from "@/hooks/use-fonts-loader/use-fonts-loader";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { loaded } = useFontsLoader(FONTS);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
