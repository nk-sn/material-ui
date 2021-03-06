import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PaperHeaderArrow from "./PaperHeaderArrow";
import {makeStyles} from "@material-ui/core/styles";
import PaperHeader from "./PaperHeader";

const useStyles = makeStyles((theme) => ({
  cell: {
    width: '50%',
    wordBreak: 'break-word',
  }
}));

const RequestForQuotations = ({data}) => {

  const [state, setState] = React.useState({
    tableOpen: true
  });

  const {tableOpen} = state;

  const toggleTableOpen = () => {
    setState({...state, tableOpen: !tableOpen});
  }

  const classes = useStyles();

  return (
    <Paper>
      <Box p={2}>
        <PaperHeader onClick={toggleTableOpen}>
          <PaperHeaderArrow open={tableOpen} />
          <Typography variant="subtitle1"><b>Запрос котировок в электронной форме</b></Typography>
        </PaperHeader>
        <Box display={tableOpen ? 'block' : 'none'}>
          <Table>
            <TableBody>
              {data.map((item, key) => {
                return (
                    <TableRow key={key}>
                      <TableCell className={classes.cell}>
                        <Typography color="textSecondary">{item.name}</Typography>
                      </TableCell>
                      <TableCell className={classes.cell}>
                        {item.name === 'Реестровый номер закупки' ? <Box display={{xs: 'block', md: 'flex'}} justify="space-between">
                          <Typography color="textPrimary">{item.value}</Typography>
                          <Box display="flex" style={{cursor: 'pointer'}}>
                            <Box dislay="inline" ml={{sm: 0, md: 2}} mr={0.5}>
                              <FeaturedPlayListOutlinedIcon />
                            </Box>
                            <Typography color="primary">Извещение</Typography>
                          </Box>
                        </Box> : <Typography color="textPrimary">{item.value}</Typography>}
                      </TableCell>
                    </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Paper>
  );
};

export default RequestForQuotations;
