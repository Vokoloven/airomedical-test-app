import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Outlet } from 'react-router-dom';

const BasicAppBar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: deepPurple[500] }}>
                    <Toolbar>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <SportsBarIcon />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ ml: 1 }}
                            >
                                Airomedical Test App
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
};

export default BasicAppBar;
