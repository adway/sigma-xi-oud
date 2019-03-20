import React from 'react';
import Helmet from 'react-helmet';
import ThemeProvider from 'theme';
import '../../static/graphik.css';
import { GlobalStyle } from '../theme';

export default ({ children }) => (
  <ThemeProvider>
    <GlobalStyle />
    <Helmet title="Predicting OUD Using Machine Learning" />
    {children}
  </ThemeProvider>
);
