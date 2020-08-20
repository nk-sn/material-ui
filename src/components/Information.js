import React from 'react';
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Information = (props) => {
    return (
        <Box display="flex">
            <Box mr={1}>
                <InfoRoundedIcon color="secondary" />
            </Box>
            <Typography color="textSecondary">
                {props.children}
            </Typography>
        </Box>
    );
};

export default Information;
