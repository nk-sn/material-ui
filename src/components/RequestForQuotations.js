import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  noticeBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  noticeIcon: {
    marginLeft: 20,
    marginRight: 5,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}));

const RequestForQuotations = ({data}) => {

  const [state, setState] = React.useState({
    tableOpen: true
  });

  const {tableOpen} = state;

  const toggleTableOpen = () => {
    setState({...state, tableOpen: !tableOpen});
  }

  const cellStyle = {
    borderBottom: 'none',
    verticalAlign: 'top',
    width: '50%',
    wordBreak: 'break-all',
  };

  const classes = useStyles();

  return (
    <Paper elevation={0} style={{padding: '20px'}}>
      <Box style={{padding: '10px 16px', cursor: 'pointer'}} display="flex" onClick={toggleTableOpen}>
        {tableOpen && <KeyboardArrowUpOutlinedIcon className="icon-up" />}
        {!tableOpen && <KeyboardArrowDownOutlinedIcon className="icon-up" />}
        <Typography variant="subtitle1"><b>Запрос котировок в электронной форме</b></Typography>
      </Box>
      <Table style={{display: tableOpen ? 'block' : 'none'}}>
        <TableBody>
          {data.map((item, key) => {
            return (
              <TableRow key={key}>
                <TableCell style={cellStyle}>
                  <Typography color="textSecondary">{item.name}</Typography>
                </TableCell>
                <TableCell style={cellStyle}>
                  {item.name === 'Реестровый номер закупки' ? <Box className={classes.noticeBox} justify="space-between">
                    <Typography color="textPrimary">{item.value}</Typography>
                    <Box display="flex" style={{cursor: 'pointer'}}>
                      <FeaturedPlayListOutlinedIcon className={classes.noticeIcon} />
                      <Typography color="textPrimary" className="link-color">Извещение</Typography>
                    </Box>
                  </Box> : <Typography color="textPrimary">{item.value}</Typography>}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default RequestForQuotations;