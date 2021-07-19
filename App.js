import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantsScreen from "./src/features/restourants/screens/Restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar />
    </>
  );
}
