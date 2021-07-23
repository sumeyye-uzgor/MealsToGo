import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, Text, View, StatusBar, Platform } from "react-native";
import styled from "styled-components";
import RestaurantInfoCard from "../components/RestaurantInfoCard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform !== "ios" &&
  `margin-top: ${Math.ceil(StatusBar.currentHeight)}px`};
`;
const SearchContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
export default RestaurantsScreen;
