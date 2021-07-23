import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

export const StyledCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const StyledInfo = styled(Card.Content)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const StyledRating = styled(View)`
  flex-direction: row;
`;
export const StyledAdditional = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const StyledIconContainer = styled(View)`
  flex-direction: row;
`;
export const StyledIcon = styled(Image)`
  width: 15px;
  height: 15px;
`;
