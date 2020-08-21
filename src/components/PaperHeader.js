import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    component: {
        cursor: 'pointer',
    }
}));

const PaperHeader = ({onClick, children}) => {
    const classes = useStyles();

    return (
        <Box py={1} px={2} display="flex" className={classes.component} onClick={onClick}>
            {children}
        </Box>
    );
};

export default PaperHeader;
