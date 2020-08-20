import React from 'react';
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Box from "@material-ui/core/Box";

const PaperHeaderArrow = ({open}) => {
    return (
        <React.Fragment>
            <Box mr={1}>
                {open ? <KeyboardArrowUpOutlinedIcon color="primary"/> : <KeyboardArrowDownOutlinedIcon color="primary"/>}
            </Box>
        </React.Fragment>
    );
};

export default PaperHeaderArrow;
