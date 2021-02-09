import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './helpers/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { NavBar } from './components/NavBar.jsx';
import { ProductHeader } from './components/ProductHeader.jsx';
import { Footer } from './components/Footer.jsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <NavBar />
        <main>
          <ProductHeader />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
