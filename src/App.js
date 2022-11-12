import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import themes from './themes';
import './scss/index.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import axios from 'axios';

const browserHistory = createBrowserHistory();
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={themes}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
