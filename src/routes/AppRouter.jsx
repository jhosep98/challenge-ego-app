import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

// components
import { NavBar } from '../components/NavBar';
import { ProductHeader } from '../components/ProductHeader';
import { Footer } from '../components/Footer';

// routes
import { Description } from './Description';

export const AppRouter = () => {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <main>
            <Route exact path="/" component={ProductHeader} />
            <Route exact path="/description" component={Description} />
            <Route />
          </main>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};
