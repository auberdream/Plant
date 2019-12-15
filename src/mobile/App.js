/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, View } from 'react-native';
import { theme } from 'framework';
import styled, { ThemeProvider } from 'styled-components';

const Background = styled(View)`
  alignItems: center;
  backgroundColor: ${(props) => props.theme.primary.base};
  flex: 1;
  height: 100%;
  justifyContent: center;
  width: 100%;
`;

const Title = styled(Text)`
    color: ${(props) => props.theme.highlightPrimary.base};
    font-size: 70em;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Title>Plant</Title>
      </Background>
    </ThemeProvider>
  );
}
