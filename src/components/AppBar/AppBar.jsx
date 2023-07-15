import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Outlet } from 'react-router-dom';
import { useSticky } from 'hooks';

const BasicAppBar = () => {
    const sticky = useSticky();

    return (
        <>
            <Box
                as={'header'}
                sx={{
                    flexGrow: 1,
                    ...(sticky ? { pt: '176px' } : { pb: 3 }),
                }}
            >
                <AppBar
                    sx={{
                        position: sticky ? 'fixed' : 'static',
                        bgcolor: deepPurple[500],
                    }}
                >
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
