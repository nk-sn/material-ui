import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import LoginInfo from "../components/LoginInfo";
import { makeStyles } from '@material-ui/core/styles';
import Search from "../components/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 60,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
}));

const Header = ({user}) => {

  const classes = useStyles();

  return (
    <Box className={classes.container} height={60}>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={8}>
          <Box display="flex" alignItems="center" height={60}>
            <Search />
          </Box>
        </Grid>
        <Grid item>
          <LoginInfo user={user} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
