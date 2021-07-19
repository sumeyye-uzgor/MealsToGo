import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import styled from "styled-components/native";
import RestourantInfoCard from "../components/RestourantInfoCard.component";
const StyledView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Math.ceil(StatusBar.currentHeight)}px;
`;
const StyledSearchView = styled(View)`
  padding: 16px;
`;
const StyledContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

export default function RestourantsScreen() {
  return (
    <StyledView>
      <StyledSearchView>
        <Searchbar />
      </StyledSearchView>
      <StyledContainer>
        <RestourantInfoCard />
      </StyledContainer>
    </StyledView>
  );
}
