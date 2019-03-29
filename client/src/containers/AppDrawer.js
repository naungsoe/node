import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsButton from './NotificationsButton';
import AccountButton from './AccountButton';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
  },
  menu: {
    marginRight: theme.spacing.unit * 2,
  },
});

class AppHeader extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar disableGutters={true}
            className={classes.toolbar}
          >
            <IconButton color="inherit"
              className={classes.menu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit"
              className={classes.grow}
            >
              Dashboard
            </Typography>
            <NotificationsButton />
            <AccountButton />
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AppHeader);
