import './App.css';
import { FC } from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Me from './views/Me';
import Game from './views/Game';

const App: FC = () => {
  return (
    <Box className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/">
            <Me />
          </Route>
          <Route exact path="/404">
            <div>
              <h2>404 - Page Not Found</h2>
            </div>
          </Route>
          <Redirect to="/404/" />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
