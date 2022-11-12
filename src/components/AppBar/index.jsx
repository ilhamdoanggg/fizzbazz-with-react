import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }} zIndex={10}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Weather & Perhitungan Apa Bole
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
