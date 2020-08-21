import React from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    component: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        alignItems: 'center',
    }
}));

const IconSearch = () => {
    const classes = useStyles();

    return (
        <Box className={classes.component} display="flex" justifyContent="center">
            <SearchIcon />
        </Box>
    );
};

export default IconSearch;
