import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// Navigation and theming
import { Navigation } from "./src/infrastructure/navigation";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

// Context providers

import { AuthContextProvider } from "./src/services/authentication/authentication.context";

// Google Fonts
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswaldFont({ Oswald_400Regular });
  const [latoLoaded] = useLatoFont({ Lato_400Regular });

  // Wait until fonts are loaded
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
