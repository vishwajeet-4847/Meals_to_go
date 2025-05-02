import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AnimationWrapper>
        <LottieView
          autoPlay
          loop
          style={{
            width: "100%" ,
            height: "100%" ,
          }}
          
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      {/* <LottieView
        autoPlay
        loop
        
        style={{
          width: 1000,
          height: 300,
          
      
        }}
        source={require('../../../../assets/watermelon.json')} 
      /> */}

      <Title>Meals ToGo </Title>
      <Spacer position="bottom" size="large" />
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer position="bottom" size="large" />
        <AuthButton
          icon="account-plus-outline"
          mode="contained"
          onPress={() => navigation.navigate("register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
