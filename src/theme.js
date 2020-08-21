import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        common: {
            background: '#f7fbfe',
        },
        primary: {
            light: 'rgba(56, 153, 215, 0.6)',
            main: 'rgba(56, 153, 215, 1)',
            dark: 'rgba(56, 153, 215, 1)',
        }
    },
    typography: {
        fontFamily: '"Exo 2","Open Sans",Arial,Helvetica,sans-serif',
        h6: {
            fontWeight: 700,
            fontSize: '0.75rem'
        }
    },
    overrides: {
        MuiSvgIcon: {
            fontSizeSmall: {
                fontSize: '16px'
            },
            fontSizeLarge: {
                fontSize: '24px'
            },
            colorPrimary: {
                color: 'black',
                opacity: 0.8,
            },
            colorSecondary: {
                color: 'black',
                opacity: 0.6,
            },
            colorError: {
                color: "#f44336",
                opacity: 0.6,
            },
        },
        MuiButton: {
            root: {
                padding: '8.5px',
            },
            outlined: {
                padding: '8.5px',
            }
        },
        MuiTableCell: {
            root: {
                borderBottom: 'none',
                verticalAlign: 'top',
            }
        },
        MuiOutlinedInput: {
            input: {
                paddingTop: '12px',
                paddingBottom: '12px'
            }
        },
    }
});

export default theme;
