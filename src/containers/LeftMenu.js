import React from 'react';
import {Drawer} from "@material-ui/core";
import DomainOutlinedIcon from '@material-ui/icons/DomainOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import Divider from "@material-ui/core/Divider";
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import LeftMenuOpener from "../components/LeftMenuOpener";
import LeftMenuCloser from "../components/LeftMenuCloser";

const useStyles = makeStyles((theme) => ({
  leftMenu: {
    backgroundColor: theme.palette.common.white,
    width: '60px',
    minHeight: '100vh',
    position: 'relative',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  },
}));

const LeftMenu = ({leftMenuOpen, toggleLeftMenu}) => {
  const logo = '/images/logo.png';

  const classes = useStyles();

  return (
    <React.Fragment>
      {!leftMenuOpen && (
          <LeftMenuOpener toggle={toggleLeftMenu} />
      )}
      <Drawer anchor="left" open={leftMenuOpen} variant="persistent" onClose={() => toggleLeftMenu(false)}>
        <Box className={classes.leftMenu}>
          <Box py={1}>
            <img alt="РОСЭЛТОРГ" src={logo} width={30} height={30} className="logo" />
          </Box>
          <Box py={1}>
            <Typography variant="h6">ГОС 2.0</Typography>
          </Box>
          <Box py={1}>
            <DomainOutlinedIcon color="primary" fontSize="large" />
          </Box>
          <Box py={1}>
            <CreditCardOutlinedIcon color="primary" fontSize="large" />
          </Box>

          <Box py={1}>
            <Divider />
          </Box>

          <Box py={1}>
            <ShowChartOutlinedIcon color="primary" fontSize="large" />
          </Box>
          <Box py={1}>
            <NotificationsNoneOutlinedIcon color="primary" fontSize="large" />
          </Box>
          <Box py={1}>
            <FolderOutlinedIcon color="primary" fontSize="large" />
          </Box>
          <Box py={1}>
            <AssignmentTurnedInOutlinedIcon color="primary" fontSize="large" />
          </Box>
          <Box py={1}>
            <SettingsOutlinedIcon color="primary" fontSize="large" />
          </Box>

          <LeftMenuCloser toggle={toggleLeftMenu} />
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default LeftMenu;
