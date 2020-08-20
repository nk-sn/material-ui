import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Information from "./Information";

const NoOffers = () => {
  return (
    <Paper elevation={0}>
        <Box p={2}>
            <Box ml={2}>
                <Typography color="textPrimary">На участие в процедуре не подано ни одной заявки</Typography>
            </Box>
            <Box ml={2} mt={2}>
                <Information>
                    В таком случае составляется протокол рассмотрения заявок с признанием запроса котировок несостоявшимся.
                    Не забудьте продлить в ЕИС срок подачи заявок на четыре рабочих дня.
                </Information>
            </Box>
        </Box>
    </Paper>
  );
}

export default NoOffers;
