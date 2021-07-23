import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/space/Spacer.component";
import StyledText from "../../../components/typography/StyledText.component";

const StyledCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const StyledInfo = styled(Card.Content)`
  padding: ${({ theme }) => theme.space[3]};
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

const StyledIcons = styled(View)`
  flex-direction: row;
`;
const Icon = styled(Image)`
  width: 15px;
  height: 15px;
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
        <StyledText variant="label">{name}</StyledText>
        <StyledAdditional>
          <StyledRating>
            {ratingArray.map((a, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </StyledRating>

          <StyledIcons>
            {isClosedTemporarily && (
              <StyledText variant="error">CLOSED TEMPORARILY</StyledText>
            )}
            {isOpenNow && (
              <Spacer position="left" size="large">
                <SvgXml xml={open} width={20} height={20} />
              </Spacer>
            )}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </StyledIcons>
        </StyledAdditional>

        <StyledText variant="caption">{address}</StyledText>
      </StyledInfo>
    </Card>
  );
}

export default RestaurantInfoCard;
