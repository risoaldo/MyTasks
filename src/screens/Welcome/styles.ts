import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;

  margin-top: -80px;
  padding: 40px 20px;
`;

export const LogoTask = styled.View`
  width: 235px;
  height: 177px;
`;

export const Headding = styled.Text`
  text-align: center;
  font-size: 15px;

  margin-top: 20px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.TouchableOpacity`
  width: 82px;
  height: 82px;
  margin-top: auto;

  justify-content: center;
  align-items: center;

  border-radius: 99999px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
