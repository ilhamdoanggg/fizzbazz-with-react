import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors';

const themes = createTheme({
    palette: {
        primary: {
            main: '#19857b',
        },
        secondary: {
            main: '#556cd6',
        },
        error: {
            main: red.A400,
        },
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
});

export default themes
