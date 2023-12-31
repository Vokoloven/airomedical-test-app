import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { deepPurple, red } from '@mui/material/colors';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { Outlet } from 'react-router-dom';
import { useSticky } from 'hooks';
import Button from '@mui/material/Button';
import { useBeerStore } from 'zustandStore';

const BasicAppBar = () => {
    const { isActiveButton, setUpdateData } = useBeerStore((state) => state);
    const sticky = useSticky();

    return (
        <>
            <Box
                as={'header'}
                sx={{
                    flexGrow: 1,
                    ...(sticky ? { pt: '176px', pb: 0 } : { pt: 0, pb: 3 }),
                }}
            >
                <AppBar
                    sx={{
                        bgcolor: deepPurple[500],
                        ...(sticky
                            ? {
                                  position: 'fixed',
                                  bgcolor: 'rgba(103, 58, 183, 0.5)',
                              }
                            : {
                                  position: 'relative',
                              }),
                    }}
                >
                    <Toolbar>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1,
                            }}
                        >
                            <SportsBarIcon />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ ml: 1 }}
                            >
                                Airomedical Test App
                            </Typography>
                        </Box>
                        {isActiveButton && (
                            <Button
                                aria-label="Delete"
                                variant="contained"
                                sx={{
                                    bgcolor: red[500],
                                    '&:hover': {
                                        bgcolor: red[700],
                                    },
                                }}
                                onClick={setUpdateData}
                            >
                                <Typography
                                    variant={'button'}
                                    sx={{ color: '#fff' }}
                                >
                                    Delete
                                </Typography>
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    );
};

export default BasicAppBar;
