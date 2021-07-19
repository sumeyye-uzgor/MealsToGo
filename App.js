import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestourantsScreen from "./src/features/restourants/screens/Restourants.screen";

export default function App() {
  return (
    <>
      <RestourantsScreen />
      <ExpoStatusBar />
    </>
  );
}
