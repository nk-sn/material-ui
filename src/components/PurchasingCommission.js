import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import Grid from "@material-ui/core/Grid";
import PaperHeaderArrow from "./PaperHeaderArrow";

const PurchasingCommission = () => {
  const [state, setState] = React.useState({
    infoOpen: true
  });

  const {infoOpen} = state;

  const toggleInfoOpen = () => {
    setState({...state, infoOpen: !infoOpen});
  }

  return (
      <Box mt={3}>
        <Paper elevation={0}>
          <Box p={2}>
            <Box py={1} px={2} className="cursor-pointer" display="flex" onClick={toggleInfoOpen}>
              <PaperHeaderArrow open={infoOpen} />
              <Typography variant="subtitle1"><b>Закупочная комиссия</b></Typography>
            </Box>
            <Box ml={2} display={infoOpen ? 'block' : 'none'}>
              <Box mb={1}>
                <Typography color="textPrimary">Наименование комиссии</Typography>
              </Box>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth={true}>
                    <Select native>
                      <option aria-label="None" value="">Выберите закупочную комиссию</option>
                      <option value={1001}>Закупочная комиссия 1</option>
                      <option value={1002}>Закупочная комиссия 2</option>
                      <option value={1003}>Закупочная комиссия 3</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item component={Box} xs={12} md={8} display={{xs: 'block', md: 'inline'}}>
                  <Box mt={{xs: 2, md: 0}}>
                    <Box display="inline" ml={{xs: 0, md: 2}}>
                      <Button variant="contained" color="default"><CreateOutlinedIcon /></Button>
                    </Box>
                    <Box display="inline" ml={2}>
                      <Button variant="outlined" color="default"><DeleteOutlinedIcon /></Button>
                    </Box>
                    <Box display="inline" ml={2}>
                      <Button variant="contained" color="primary"><GroupAddOutlinedIcon /></Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Box>
  );
};

export default PurchasingCommission;
