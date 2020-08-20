import React from 'react';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import VerticalAlignTopOutlinedIcon from '@material-ui/icons/VerticalAlignTopOutlined';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import Information from "./Information";
import PaperHeaderArrow from "./PaperHeaderArrow";

const ApplicationReviewProtocol = () => {
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
            <Box py={1} px={2} display="flex" className="cursor-pointer" onClick={toggleInfoOpen}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box display="flex">
                    <PaperHeaderArrow open={infoOpen} />
                    <Typography variant="subtitle1"><b>Протокол рассмотрения заявок</b></Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography color="error" align="right">
                    10.04.2019 18:59:00 [GMT +3 Москва] &nbsp;
                    <HelpRoundedIcon color="error" fontSize="small" />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box ml={2} display={infoOpen ? 'block' : 'none'} >
              <Box mt={2}>
                <Typography color="textPrimary">Генерация протокола</Typography>
              </Box>
              <Box mt={1}>
                <Information>
                  Для генерации протокола нужно выбрать шаблон протокола. Затем Вы можете скачать автоматически сформированный
                  протокол рассмотрения заявок или опубликовать его без подписей членов комиссии.
                </Information>
              </Box>
              <Box mt={2} mb={1}>
                <Typography color="textPrimary">Шаблон протокола для автоматического формирования</Typography>
              </Box>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <FormControl variant="outlined" fullWidth={true}>
                    <Select native>
                      <option aria-label="None" value="">Выберите шаблон</option>
                      <option value={1001}>Шаблон 1</option>
                      <option value={1002}>Шаблон 2</option>
                      <option value={1003}>Шаблон 3</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item component={Box} xs={12} md={8} display={{xs: 'block', md: 'inline'}}>
                  <Box mt={{xs: 2, md: 0}}>
                    <Box display="inline" ml={{xs: 0, md: 2}}>
                      <Button variant="outlined" color="default"><SaveAltOutlinedIcon /></Button>
                    </Box>
                    <Box display="inline" ml={2}>
                      <Button variant="contained" color="default"><AssignmentOutlinedIcon /></Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Box mt={2} mb={1}>
                    <Typography color="textPrimary" mb={1}>
                      Дата подписания протокола&nbsp;
                      <HelpRoundedIcon fontSize="small" color="primary" />
                    </Typography>
                    <TextField
                        placeholder="Введите дату"
                        variant="outlined"
                        fullWidth={true}
                        InputProps={{
                          endAdornment: (
                              <InputAdornment position="end">
                                <CalendarTodayOutlinedIcon />
                              </InputAdornment>
                          ),
                        }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2} mb={1}>
                <Typography color="textPrimary">Загрузка протокола</Typography>
              </Box>
              <Grid container>
                <Grid item xs={12} md={3}>
                  <Box mb={{xs: 1, md: 0}}>
                    <Button variant="outlined" color="default" fullWidth={true}>
                      <VerticalAlignTopOutlinedIcon />&nbsp;&nbsp;Загрузить&nbsp;файл
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Box ml={{xs: 0, md: 2}}>
                    <Information>
                      Вы можете загрузить свой вариант протокола, подписанный всеми членами комиссии либо загрузить
                      отсканированный подписанный автоматически сформированный протокол.
                    </Information>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Box>
  );
}

export default ApplicationReviewProtocol;
