import React from 'react';
import './App.css';
import NavBar from './component/NavBar'
import { Grid } from '@material-ui/core'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import customTheme from './styling/customTheme';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MovieCards from './component/MovieCards';
import AboutMe from './component/AboutMe';
import HomePage from './component/HomePage';
import { Scrollbars } from 'react-custom-scrollbars';



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
                    <HomePage />
                    <Grid container spacing={3} style={{ padding: 12, justifyContent: "center", alignItems: "center" }} >
                      <MovieCards />
                    </Grid>
                    <AboutMe></AboutMe>
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
