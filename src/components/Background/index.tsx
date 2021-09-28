import React, { ReactNode } from "react";

import BackgroundImg from "../../../assets/background.png";


import { Image, Text } from "react-native";
import { Container } from "./styles";

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  return (
    <Container>
      <Image source={BackgroundImg} resizeMode="stretch" />
      {children}
    </Container>
  );
}
