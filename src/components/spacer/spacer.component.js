import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getMarginStyle = (position, size, theme) => {
  const property = positionVariant[position] || 'marginTop'; // Default to 'top' margin
  const sizeIndex = sizeVariant[size] || sizeVariant.small; // Default to 'small' size
  const value = theme.space[sizeIndex]; // Assuming theme has a 'space' object defined.

  return {
    [property]: value, // Applying the margin value to the correct property
  };
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getMarginStyle(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
