import React from 'react';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Typography from "@material-ui/core/Typography";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import Grid from '@material-ui/core/Grid';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import VerticalAlignTopOutlinedIcon from '@material-ui/icons/VerticalAlignTopOutlined';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles((theme) => ({
  questionIcon: {
    fontSize: '18px',
    opacity: 0.6
  },
  selectRoot: {
    paddingTop: 12,
    paddingBottom: 12,
    width: 200
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
  buttons: {
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      display: 'box',
    },
  },
  buttonUpload: {
    padding: 8.5,
  },
  inputDate: {
    paddingTop: 12,
    paddingBottom: 12,
    width: 200
  }
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}))(Tooltip);

const ApplicationReviewProtocol = () => {
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
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box display="flex">
              {infoOpen && <KeyboardArrowUpOutlinedIcon className="icon-up" />}
              {!infoOpen && <KeyboardArrowDownOutlinedIcon className="icon-up" />}
              <Typography variant="subtitle1"><b>Протокол рассмотрения заявок</b></Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
            <Typography color="error">
              10.04.2019 18:59:00 [GMT +3 Москва] &nbsp;
              <LightTooltip title="Время утверждения протокола рассмотрения заявок" placement="top">
                <HelpRoundedIcon classes={{root: classes.questionIcon}} />
              </LightTooltip>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box style={{marginLeft: 16, display: infoOpen ? 'block' : 'none'}}>
        <Box style={{marginTop: 16}}>
          <Typography color="textPrimary">Генерация протокола</Typography>
        </Box>
        <Box display="flex" style={{marginTop: 8}}>
          <InfoRoundedIcon className="icon-info" />
          <Typography color="textSecondary">
            Для генерации протокола нужно выбрать шаблон протокола. Затем Вы можете скачать автоматически сформированный
            протокол рассмотрения заявок или опубликовать его без подписей членов комиссии.
          </Typography>
        </Box>
        <Typography color="textPrimary" style={{marginTop: 16, marginBottom: 8}}>Шаблон протокола для автоматического формирования</Typography>
        <FormControl variant="outlined">
          <Select native classes={{root: classes.selectRoot}}>
            <option aria-label="None" value="">Выберите шаблон</option>
            <option value={1001}>Шаблон 1</option>
            <option value={1002}>Шаблон 2</option>
            <option value={1003}>Шаблон 3</option>
          </Select>
        </FormControl>
        <Box className={classes.buttons}>
          <Button variant="outlined" color="default" className={classes.buttonDefaultOutlined}><SaveAltOutlinedIcon /></Button>
          <Button variant="contained" color="default" className={classes.buttonDefault}><AssignmentOutlinedIcon /></Button>
        </Box>
        <Box style={{marginTop: 16, marginBottom: 8}}>
          <Typography color="textPrimary" style={{marginBottom: 8}}>
            Дата подписания протокола&nbsp;
            <LightTooltip title="Дата подписания протокола" placement="bottom">
              <HelpRoundedIcon classes={{root: classes.questionIcon}} />
            </LightTooltip>
          </Typography>
          <TextField
            placeholder="Введите дату"
            variant="outlined"
            InputProps={{
              classes: {input: classes.inputDate},
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box style={{marginTop: 16, marginBottom: 8}}>
          <Typography color="textPrimary">Загрузка протокола</Typography>
        </Box>
        <Grid container>
          <Grid item sm={12} md={3}>
            <Box style={{marginRight: 16, marginBottom: 8}}>
              <Button variant="outlined" color="default" className={classes.buttonUpload}>
                <VerticalAlignTopOutlinedIcon />&nbsp;&nbsp;Загрузить&nbsp;файл
              </Button>
            </Box>
          </Grid>
          <Grid item sm={12} md={9}>
            <Box display="flex">
              <InfoRoundedIcon className="icon-info" />
              <Typography color="textSecondary">
                Вы можете загрузить свой вариант протокола, подписанный всеми членами комиссии либо загрузить
                отсканированный подписанный автоматически сформированный протокол.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default ApplicationReviewProtocol;