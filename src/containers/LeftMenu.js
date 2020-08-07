import React from 'react';
import {Drawer} from "@material-ui/core";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import DomainOutlinedIcon from '@material-ui/icons/DomainOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import Divider from "@material-ui/core/Divider";
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const LeftMenu = ({leftMenuOpen, toggleLeftMenu}) => {
  const logo = '/images/logo.png';

  return (
    <React.Fragment>
      <Drawer anchor="left" open={leftMenuOpen} variant="persistent" onClose={() => toggleLeftMenu(false)}>
        <div className="left-menu">
          <div className="menu-item">
            <img alt="РОСЭЛТОРГ" src={logo} className="logo" />
          </div>
          <div className="menu-item">
            <h4>ГОС 2.0</h4>
          </div>
          <div className="menu-item">
            <DomainOutlinedIcon className="left-menu-icon" />
          </div>
          <div className="menu-item">
            <CreditCardOutlinedIcon className="left-menu-icon" />
          </div>

          <div style={{paddingTop: 10, paddingBottom: 10}}>
            <Divider />
          </div>

          <div className="menu-item">
            <ShowChartOutlinedIcon className="left-menu-icon" />
          </div>
          <div className="menu-item">
            <NotificationsNoneOutlinedIcon className="left-menu-icon" />
          </div>
          <div className="menu-item">
            <FolderOutlinedIcon className="left-menu-icon" />
          </div>
          <div className="menu-item">
            <AssignmentTurnedInOutlinedIcon className="left-menu-icon" />
          </div>
          <div className="menu-item">
            <SettingsOutlinedIcon className="left-menu-icon" />
          </div>

          <div className="left-menu-button" onClick={ () => toggleLeftMenu(!leftMenuOpen) }>
            <ArrowBackOutlinedIcon style={{ fontSize: 20, color: "lightgrey" }} />
          </div>
        </div>
      </Drawer>
      {!leftMenuOpen && (
        <div className="left-menu-opener" onClick={() => toggleLeftMenu(true)}>
          <ArrowForwardOutlinedIcon style={{ fontSize: 20, color: "lightgrey" }} />
        </div>
      )}
    </React.Fragment>
  );
}

export default LeftMenu;