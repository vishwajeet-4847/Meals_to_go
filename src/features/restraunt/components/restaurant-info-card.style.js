import styled from 'styled-components';
import { Card } from "react-native-paper";
import { Image } from "react-native";




const Rating = styled.View`
  flex-direction: row;
  padding-block: ${(props) => props.theme.space[2]};
  margin-block: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;



const RestrauntCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestrauntCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[1]};
`;

const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;



export {
    RestrauntCard,
  RestrauntCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon
  
}