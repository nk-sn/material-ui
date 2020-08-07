import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const LoginInfo = ({user: {avatar, fullName, companyName}}) => {

  return (
    <Box>
      <Grid container alignItems="center" className="login-info">
        <Grid item  style={{paddingRight: 8}} >
          <Box display={{xs: 'none', sm: 'block'}}>
            <Avatar alt={fullName} src={avatar} />
          </Box>
        </Grid>
        <Grid item style={{paddingRight: 8}} >
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