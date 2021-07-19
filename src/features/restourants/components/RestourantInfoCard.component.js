import React from "react";
import { Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const StyledCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
const StyledCardContent = styled(Card.Content)`
  padding: 16px;
`;
function RestourantInfoCard({ restaurant = {} }) {
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
    <Card>
      <StyledCardCover source={{ uri: photos[0] }} />
      <StyledCardContent>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </StyledCardContent>
    </Card>
  );
}

export default RestourantInfoCard;
