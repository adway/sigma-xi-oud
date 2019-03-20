import React from 'react';
import {
  createGlobalStyle as injectGlobal,
  ThemeProvider as Root
} from 'styled-components';
import config from './config';

export const theme = config;

export const GlobalStyle = injectGlobal`
* {
  box-sizing: border-box;
  font-weight: inherit;
  text-rendering: optimizeLegibility;
  -webkit-appearance: none;
  -moz-appearance: none;
}
html,
body {
  min-height: 100%;
  min-width: 100%;
}
html {
  background-color: ${theme.colors.white};
}
body {
  padding: 0;
  margin: 0;
  position: relative;
  min-height: 100%;
  margin-top: 0;
  width: 100%;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  font-size: ${theme.fontSizes[3]}px;
  font-family: ${theme.font};
  font-weight: normal;
  line-height: 1.5;
}
h1,
h2,
h3 {
  font-weight: bold;
}
a {
  box-shadow: none;
  text-decoration: none;
}
ul, ol {
  margin: 0;
  padding: 0;
}
p > a,
strong,
b {
  font-weight: bold !important;
}
`;

const ThemeProvider = ({ children }) => (
  <Root theme={config}>
    <>{children}</>
  </Root>
);

export default ThemeProvider;
