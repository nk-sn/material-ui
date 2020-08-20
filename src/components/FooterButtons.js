import React from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const FooterButtons = () => {
    return (
        <Box mt={4} pb={8} display="flex" justifyContent="flex-end">
            <Box>
                <Box display={{xs: 'block', md: 'inline'}}>
                    <Button variant="outlined">Подписать и направить</Button>
                </Box>
                <Box
                    display={{xs: 'block', md: 'inline'}}
                    ml={{xs: 0, md: 2}}
                    mt={{xs: 2, md: 0}}
                >
                    <Button variant="outlined">Сохранить как черновик</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default FooterButtons;
