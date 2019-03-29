import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppHeader from './containers/AppHeader';

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#ffffff',
      dark: '#00675b',
      light: '#52c7b8',
      main: '#009688',
    },
    secondary: {
      contrastText: '#ffffff',
      dark: '#c41c00',
      light: '#ff8a50',
      main: '#ff5722',
    },
  }
});

class Module extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppHeader />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <Module />,
  document.getElementById('app')
);

module.hot.accept();
