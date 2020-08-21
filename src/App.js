import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import LeftMenu from "./containers/LeftMenu";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import Main from "./containers/Main";

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
      <Main
          user={user}
          breadcrumbs={breadcrumbs}
          requestForQuotations={requestForQuotations}
          isMenuOpen={state.leftMenuOpen}
      />
    </ThemeProvider>
  );
}

export default App;
