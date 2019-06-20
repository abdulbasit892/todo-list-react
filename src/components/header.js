import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    paddingLeft: 50,
  }
}));
const Header = props => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Todo-List
          </Typography>
        <Button color="inherit" onClick={props.handleOpen}>Login</Button>
      </Toolbar>
    </AppBar>
  );


};

export default Header;