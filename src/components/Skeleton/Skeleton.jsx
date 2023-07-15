import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CustomSkeleton = () => {
    return (
        <Paper elevation={3} sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={140} />

            <Box p={2}>
                <Typography gutterBottom variant="h5" component="div">
                    <Skeleton width={'50%'} />
                </Typography>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
                <Typography variant="body2">
                    <Skeleton />
                </Typography>
            </Box>
        </Paper>
    );
};
