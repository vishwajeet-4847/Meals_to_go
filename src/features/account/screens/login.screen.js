import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator , MD2Colors} from "react-native-paper";
import { AccountBackground, AccountCover, AuthButton, AccountContainer, AuthInput , Title } from "../components/account.style";
import { AuthContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({navigation}) => {
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState(null);

  const { onLogin, loginError , isLoading } = useContext(AuthContext);

  const validateInputs = () => {
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setValidationError("Please enter a valid email address.");
      return false;
    }
    if (!password || password.length < 6) {
      setValidationError("Password must be at least 6 characters long.");
      return false;
    }
    setValidationError(null); // Clear validation errors if input is valid
    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      onLogin(email, password); // Proceed only if inputs are valid
    }
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals ToGo </Title>
      <Spacer position="bottom" size="large" />
      <AccountContainer>
        {/* Validation Error Message */}
        {validationError && <Text variant="error">{validationError}</Text>}

        {/* Backend Error Message */}
        {loginError && <Text variant="error"> {loginError}</Text>}

        <Spacer position="top" size="large" />
        <AuthInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <Spacer position="bottom" size="large" />
        <AuthInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
        />
        <Spacer position="bottom" size="large" />
        {!isLoading ?<AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </AuthButton>:
        
        <ActivityIndicator size="large" color={MD2Colors.blue500} />
        }
        
      </AccountContainer>

      <Spacer size="large" />
      <AuthButton
          
          mode="contained"
          onPress={()=>navigation.goBack()}
        >
          Back
        </AuthButton>
     
    </AccountBackground>
  );
};
