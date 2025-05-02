import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;

  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  width: 90%;
  padding: ${(props) => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  font-weight: bold;
  padding: ${(props) => props.theme.space[1]};
`;

export const AuthInput = styled(TextInput)`
  padding: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const Title = styled.Text`
  font-size: 30px;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;   
  position: absolute;
  top: 7%;
  left: 0;
  justify-content: center;  
  z-index:999;
  align-items: center;     
  padding: ${(props) => props.theme.space[1]};
`;