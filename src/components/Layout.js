import React from 'react';
import Helmet from 'react-helmet';
import ThemeProvider from 'theme';
import '../../static/graphik.css';

export default ({ children }) => (
  <ThemeProvider>
    <Helmet title="Predicting OUD Using Machine Learning" />
    {children}
  </ThemeProvider>
);
