import React from 'react';
import Paper from "@material-ui/core/Paper";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const NoOffers = () => {
  return (
    <Paper elevation={0} style={{padding: '20px'}}>
      <Box style={{marginLeft: 16}}>
        <Typography color="textPrimary">На участие в процедуре не подано ни одной заявки</Typography>
      </Box>
      <Box display="flex" style={{marginLeft: 16, marginTop: 16}}>
        <InfoRoundedIcon className="icon-info" />
        <Typography color="textSecondary">
          В таком случае составляется протокол рассмотрения заявок с признанием запроса котировок несостоявшимся.
          Не забудьте продлить в ЕИС срок подачи заявок на четыре рабочих дня.
        </Typography>
      </Box>
    </Paper>
  );
}

export default NoOffers;