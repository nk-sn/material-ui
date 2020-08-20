import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import LoginInfo from "../components/LoginInfo";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputInput: {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
  },
}));

const Header = ({user}) => {

  const classes = useStyles();

  return (
    <Box className="header-component" height={60}>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={8}>
          <Box display="flex" alignItems="center" height={60}>
            <Box className="box-search-inner">
              <Box className="icon-search">
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Поиск…"
                classes={{input: classes.inputInput}}
              />
            </Box>
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
