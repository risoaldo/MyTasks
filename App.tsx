import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Roboto_300Light,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

import theme from "./src/global/theme";
import { Welcome } from "./src/screens/Welcome";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_900Black_Italic,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Welcome />
      </Background>
    </ThemeProvider>
  );
}
