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
import ApplicationReviewProtocol from "./components/ApplicationReviewProtocol";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import classNames from 'classnames/bind';
import FooterButtons from "./components/FooterButtons";

function App() {
  const [state, setState] = React.useState({
    leftMenuOpen: true
  });

  const toggleLeftMenu = (isOpen) => {
    setState({ ...state, leftMenuOpen: !!isOpen } );
  };

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LeftMenu leftMenuOpen={state.leftMenuOpen} toggleLeftMenu={(isOpen) => toggleLeftMenu(isOpen)} />
      <Box className="main-container">
        <Header user={user} />
        <Box className={classNames('box-body', {indent: state.leftMenuOpen})}>
          <Container maxWidth="lg">
            <PageBreadcrumbs breadcrumbs={breadcrumbs} />
            <h1>Рассмотрение заявок</h1>
            <RequestForQuotations data={requestForQuotations} />
            <PurchasingCommission />
            <Box mt={3} mb={2}>
              <h3>Заявки</h3>
            </Box>
            <NoOffers />
            <ApplicationReviewProtocol />
            <FooterButtons />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
