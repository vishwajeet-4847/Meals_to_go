import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";


export const SafeView = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
