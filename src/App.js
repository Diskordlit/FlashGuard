import React from 'react';
import './App.css';
import NavBar from './component/NavBar'
import { } from '@material-ui/core'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import customTheme from './styling/customTheme';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './component/HomePage';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <body className="content">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                  <HomePage />
                </Route>
              </Switch>
            </Router>
          </body>
      </div >
    </ThemeProvider>
  );
}

export default App;
