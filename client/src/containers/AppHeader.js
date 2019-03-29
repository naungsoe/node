import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsButton from './NotificationsButton';
import AccountButton from './AccountButton';

const styles = theme => ({
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
          <Toolbar disableGutters={false}>
            <Grid container
              direction="row"
              justify="space-between"
            >
              <Grid item>
                <Grid container
                  alignItems="center"
                  direction="row"
                >
                  <IconButton color="inherit"
                    className={classes.menu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit">
                    Dashboard
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <NotificationsButton />
                <AccountButton />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default createFragmentContainer(
  withStyles(styles)(AppHeader),
  graphql`
    fragment AppHeader_result on AppHeader {
      complete
      text
    }
  `
)
