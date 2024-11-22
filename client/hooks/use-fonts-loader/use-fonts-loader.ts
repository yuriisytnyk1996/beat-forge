import { useEffect } from "react";
import { FontSource, useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const useFontsLoader = (fonts: Record<string, FontSource>) => {
  const [loaded] = useFonts(fonts);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return {
    loaded,
  };
};
