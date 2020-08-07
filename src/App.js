import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import LeftMenu from "./containers/LeftMenu";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Header from "./containers/Header";
import PageBreadcrumbs from "./components/PageBreadcrumbs";
import RequestForQuotations from "./components/RequestForQuotations";
import PurchasingCommission from "./components/PurchasingCommission";
import NoOffers from "./components/NoOffers";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import ApplicationReviewProtocol from "./components/ApplicationReviewProtocol";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 16,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: 16
    },
  },
  buttonBox: {
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }
}));

function App() {
  const [state, setState] = React.useState({
    leftMenuOpen: true
  });

  const toggleLeftMenu = (isOpen) => {
    setState({ ...state, leftMenuOpen: !!isOpen } );
  };

  const leftIndent = 61;

  const user = {
    avatar: '/images/avatar.png',
    fullName: 'Санников Н.М.',
    companyName: 'АО "Росэлторг"'
  };

  const breadcrumbs = [
    {name: 'Процедуры 44-ФЗ', url: '/'},
    {name: 'Все закупки', url: '/'},
    {name: '0146200002018002274', url: '/'},
    {name: 'Рассмотрение заявок', url: '/'},
  ];

  const requestForQuotations = [
    {name: 'Реестровый номер закупки', value: '014620002018002274'},
    {name: 'Идентификационный код закупки', value: '171532110830153210100100420010000244'},
    {name: 'Наименование процедуры', value: 'Оказание услуг по предоставлению во временнное пользование и техническое обслуживание копировально-множительного оборудования для нужд "Фонд капитального ремонта общего имущества в многоквартирных домах"'},
    {name: 'Начальная цена', value: '500 000, 00 ₽'},
    {name: 'Преимущества', value: 'Субъектам малого предпринимательства, социально ориентированным некоммерческим организациям'},
  ];

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <LeftMenu leftMenuOpen={state.leftMenuOpen} toggleLeftMenu={(isOpen) => toggleLeftMenu(isOpen)} />
      <Box className="main-container" style={{marginLeft: state.leftMenuOpen ? leftIndent : null}}>
        <Header user={user} />
        <Container maxWidth="lg">
          <PageBreadcrumbs breadcrumbs={breadcrumbs} />
          <h1>Рассмотрение заявок</h1>
          <RequestForQuotations data={requestForQuotations} />
          <PurchasingCommission />
          <h3 style={{margin: '24px 0 16px 0'}}>Заявки</h3>
          <NoOffers />
          <ApplicationReviewProtocol />
          <Box style={{marginTop: 32, marginBottom: 64, textAlign: 'right'}}>
            <Box className={classes.buttonBox}>
              <Button variant="outlined" className={classes.button}>Подписать и направить</Button>
            </Box>
            <Button variant="outlined">Сохранить как черновик</Button>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;
