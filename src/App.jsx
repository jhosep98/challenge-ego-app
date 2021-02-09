import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from './helpers/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppRouter } from './routes/AppRouter';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
