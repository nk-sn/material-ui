import React from 'react';
import Paper from "@material-ui/core/Paper";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';

const useStyles = makeStyles((theme) => ({
  selectRoot: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonDefault: {
    padding: 8.5,
    marginLeft: 16,
    backgroundColor: '#edeff3',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 16,
      marginTop: 16
    },
  },
  buttonDefaultOutlined: {
    padding: 8.5,
    marginLeft: 16,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 16,
      marginTop: 16
    },
  },
  buttonPrimary: {
    padding: 8.5,
    marginLeft: 32,
    backgroundColor: '#3f9ada',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: 16
    },
  },
  buttons: {
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      display: 'box',
    },
  }
}));

const PurchasingCommission = () => {
  const [state, setState] = React.useState({
    infoOpen: true
  });

  const {infoOpen} = state;

  const toggleInfoOpen = () => {
    setState({...state, infoOpen: !infoOpen});
  }

  const classes = useStyles();

  return (
    <Paper elevation={0} style={{padding: '20px', marginTop: 24}}>
      <Box style={{padding: '10px 16px', cursor: 'pointer'}} display="flex" onClick={toggleInfoOpen}>
        {infoOpen && <KeyboardArrowUpOutlinedIcon className="icon-up" />}
        {!infoOpen && <KeyboardArrowDownOutlinedIcon className="icon-up" />}
        <Typography variant="subtitle1"><b>Закупочная комиссия</b></Typography>
      </Box>
      <Box style={{marginLeft: 16, display: infoOpen ? 'block' : 'none'}}>
        <Typography color="textPrimary" style={{marginBottom: 8}}>Наименование комиссии</Typography>
        <FormControl variant="outlined">
          <Select native classes={{root: classes.selectRoot}}>
            <option aria-label="None" value="">Выберите закупочную комиссию</option>
            <option value={1001}>Закупочная комиссия 1</option>
            <option value={1002}>Закупочная комиссия 2</option>
            <option value={1003}>Закупочная комиссия 3</option>
          </Select>
        </FormControl>
        <Box className={classes.buttons}>
          <Button variant="contained" color="default" className={classes.buttonDefault}><CreateOutlinedIcon /></Button>
          <Button variant="outlined" color="default" className={classes.buttonDefaultOutlined}><DeleteOutlinedIcon /></Button>
          <Button variant="contained" color="primary" className={classes.buttonPrimary}><GroupAddOutlinedIcon /></Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PurchasingCommission;