import React from 'react';
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        height: 60,
        width: 60,
        textAlign: 'center',
        paddingTop: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        cursor: 'pointer',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    }
}));

const LeftMenuOpener = ({toggle}) => {
    const classes = useStyles();

    return (
        <Box className={classes.component} onClick={() => toggle(true)}>
            <MenuOutlinedIcon color="primary" fontSize="large" />
        </Box>
    );
};

export default LeftMenuOpener;
