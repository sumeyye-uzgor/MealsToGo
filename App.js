import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantsScreen from "./src/features/restourants/screens/Restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructures/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
