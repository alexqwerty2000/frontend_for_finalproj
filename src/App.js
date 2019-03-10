import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './component/LoginForm'
import './App.css';
import MainPage from "./pages/MainPage";

class App extends Component {
  render() {
    return (
        <Switch>
          <Route to = '/signup' componenet = {Login}/>
          <Route to = '/' component = {MainPage}/>
        </Switch>
    );
  }
}

export default App;
