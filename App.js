import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import styled from "styled-components/native";
const StyledView = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Math.ceil(StatusBar.currentHeight)}px;
`;
const StyledSearchView = styled.View`
  padding: 16px;
`;
const StyledContainer = styled.View`
  flex: 1;
  background-color: green;
  padding: 16px;
`;

export default function App() {
  return (
    <StyledView>
      <StyledSearchView>
        <Searchbar />
      </StyledSearchView>
      <StyledContainer>
        <Text>Deneeme2</Text>
      </StyledContainer>
      <ExpoStatusBar />
    </StyledView>
  );
}
