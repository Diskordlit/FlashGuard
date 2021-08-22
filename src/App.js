import React from 'react';
import './App.css';
import NavBar from './component/NavBar'
import { Grid, Paper, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from './styling/customTheme';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MovieCards from './component/MovieCards';
import AboutMe from './component/AboutMe';
import HomePage from './component/HomePage';
import { useStyles } from './styling/useStyles';





function App() {
  document.body.style = 'background: #0B3E82;';
  const classes = useStyles();
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
                  <Grid container style={{ padding: 12, justifyContent: "center", alignItems: "center" }} >
                    <Paper className={classes.paper}>
                      <Typography>
                        <h2>Here Are Some Examples of Netflix Shows Containing Flashing Lights With Comments From Its Viewers</h2>
                      </Typography>
                    </Paper>
                    <MovieCards />
                  </Grid>
                  <AboutMe></AboutMe>
                </div>
              </Route>
            </Switch>
          </Router>
        </body>
      </div>
    </ThemeProvider >
  );
}

export default App;
