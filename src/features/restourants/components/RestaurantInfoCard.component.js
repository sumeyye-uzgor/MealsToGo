import React from "react";
import { View, Image, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const StyledCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const StyledInfo = styled(Card.Content)`
  padding: ${({ theme }) => theme.space[3]};
`;
const StyledTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const StyledRating = styled(View)`
  flex-direction: row;
`;
const StyledAdditional = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const StyledParagraph = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const StyledIcons = styled(View)`
  flex-direction: row;
`;
function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card elevation={6}>
      <StyledCardCover source={{ uri: photos[0] }} />
      <StyledInfo>
        <StyledTitle>{name}</StyledTitle>
        <StyledAdditional>
          <StyledRating>
            {ratingArray.map((a, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </StyledRating>

          <StyledIcons>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            <SvgXml xml={open} width={20} height={20} />
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </StyledIcons>
        </StyledAdditional>

        <StyledParagraph>{address}</StyledParagraph>
      </StyledInfo>
    </Card>
  );
}

export default RestaurantInfoCard;
