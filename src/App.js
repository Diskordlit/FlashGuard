import React from 'react';
import AboutMe from './pages/About-me';
import './App.css';
import NavBar from './component/NavBar'
import { } from '@material-ui/core'
import { ThemeProvider , makeStyles } from '@material-ui/core/styles';
import customTheme from './styling/customTheme';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MovieCards from './component/MovieCards';

function App() {
  document.body.style = 'background: #0B3E82;';
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <body>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home">
                <div className="content">
                  <MovieCards/>
                </div>
              </Route>
            </Switch>
          </Router>
        </body>
      </div >
    </ThemeProvider>
  );
}

export default App;
