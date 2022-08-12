import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Loading from './components/Loading';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // userName: '',
    };
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={ (props) => (
            <Login
              { ...props }
            />) }
        />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ (props) => <Album { ...props } /> } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route
          exact
          path="/profile/edit"
          component={ (props) => <ProfileEdit { ...props } /> }
        />
        <Route exact path="/loading" component={ Loading } />
        <Route path="/:id" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
