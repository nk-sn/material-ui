import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Header from "./Header";
import Box from "@material-ui/core/Box";
import classNames from "classnames/bind";
import Container from "@material-ui/core/Container";
import PageBreadcrumbs from "../components/PageBreadcrumbs";
import RequestForQuotations from "../components/RequestForQuotations";
import PurchasingCommission from "../components/PurchasingCommission";
import NoOffers from "../components/NoOffers";
import ApplicationReviewProtocol from "../components/ApplicationReviewProtocol";
import FooterButtons from "../components/FooterButtons";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.common.background,
        minHeight: '100vh',
    },
    boxBody: {
        '&.indent': {
            marginLeft: 60
        }
    }
}));

const Main = ({user, breadcrumbs, requestForQuotations, isMenuOpen}) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Header user={user} />
            <Box className={classNames(classes.boxBody, {indent: isMenuOpen})}>
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
    );
};

export default Main;
