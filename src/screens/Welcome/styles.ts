import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${( {theme} ) => theme.colors.background  };
`;

export const Headding = styled.Text`
  text-align: center;
  font-size: 15px;

  margin-top: 30px;
  color: ${( {theme} ) => theme.colors.text  };
`;

export const Button = styled.TouchableOpacity`
  width: 82px;
  height: 82px;

  justify-content: center;
  align-items: center;

  margin-top: 30px;

  box-shadow: 0px 4px 67px rgba(238, 80, 10, 0.79);
  

  border-radius: 99999px;
  background-color: ${( {theme} ) => theme.colors.secondary  };


`;