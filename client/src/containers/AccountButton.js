import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/Inbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
});

class AccountButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
    };
    this._handleClick = this._handleClick.bind(this);
    this._handleClickAway = this._handleClickAway.bind(this);
  }

  _handleClick(event) {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  _handleClickAway() {
    this.setState(state => ({
      anchorEl: null,
      open: false,
    }));
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <IconButton color="inherit"
          onClick={this._handleClick}
        >
          <AccountCircleIcon />
        </IconButton>
        <Popper placement="bottom"
          open={open}
          anchorEl={anchorEl}
        >
          <ClickAwayListener onClickAway={this._handleClickAway}>
            <Paper>
              <List component="nav">
                <ListItem>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
              </List>
              <Divider />
              <List component="nav">
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign out" />
                </ListItem>
              </List>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AccountButton);
