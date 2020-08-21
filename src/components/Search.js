import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import IconSearch from "./IconSearch";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    component: {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: '100%',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }
    },
    input: {
        padding: theme.spacing(1.5, 1, 1.5, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
    },
}));

const Search = () => {
    const classes = useStyles();

    return (
        <Box className={classes.component}>
            <IconSearch />
            <InputBase
                placeholder="Поиск…"
                classes={{input: classes.input}}
            />
        </Box>
    );
};

export default Search;
