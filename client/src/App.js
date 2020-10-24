import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar'
import { Container, } from "semantic-ui-react";
import ProductsForm from './components/ProductsForm';
import ProductView from './components/ProductView';
import PlaylistView from './components/PlaylistView';
import Playlists from './components/Playlists';



const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductsForm} />
        <Route exact path="/products/:id" component={ProductView} />
        <Route exact path="/playlists/:id" component={PlaylistView} />
        <Route exact path="/playlists" component={Playlists} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;