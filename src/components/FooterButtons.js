import React from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const FooterButtons = () => {
    return (
        <Box mt={4} pb={8} display="flex" justifyContent="flex-end">
            <Box>
                <Box display={{xs: 'block', md: 'inline-block'}} width={250}>
                    <Button variant="contained" color="primary" fullWidth={true}>Подписать и направить</Button>
                </Box>
                <Box
                    display={{xs: 'block', md: 'inline-block'}}
                    width={250}
                    ml={{xs: 0, md: 2}}
                    mt={{xs: 2, md: 0}}
                >
                    <Button variant="contained" color="default" fullWidth={true}>Сохранить как черновик</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default FooterButtons;
