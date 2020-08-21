import React from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const useStyles = makeStyles((theme) => ({
    component: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 60,
        cursor: 'pointer',
        paddingBottom: theme.spacing(2),
    }
}));

const LeftMenuCloser = ({toggle}) => {
    const classes = useStyles();

    return (
        <Box className={classes.component} onClick={ () => toggle(false) }>
            <ArrowBackOutlinedIcon color="secondary" fontSize="large" />
        </Box>
    );
};

export default LeftMenuCloser;
