import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  component: {
    maxWidth: 300,
    height: 60
  }
}));

const LoginInfo = ({user: {avatar, fullName, companyName}}) => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container alignItems="center" className={classes.component}>
        <Grid item component={Box} pr={1}>
          <Box display={{xs: 'none', sm: 'block'}}>
            <Avatar alt={fullName} src={avatar} />
          </Box>
        </Grid>
        <Grid item component={Box} pr={1}>
          <Typography variant="subtitle1">
            {fullName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {companyName}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginInfo;
