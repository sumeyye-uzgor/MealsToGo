import React from "react";
import { Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const StyledCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const StyledCardContent = styled(Card.Content)`
  padding: ${({ theme }) => theme.space[3]};
`;
const StyledTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const StyledParagraph = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={6}>
      <StyledCardCover source={{ uri: photos[0] }} />
      <StyledCardContent>
        <StyledTitle>{name}</StyledTitle>
        <StyledParagraph>{address}</StyledParagraph>
      </StyledCardContent>
    </Card>
  );
}

export default RestaurantInfoCard;
