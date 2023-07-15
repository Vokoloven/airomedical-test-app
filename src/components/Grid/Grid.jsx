/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ActionAreaCard } from 'components/Card';
import { CustomSkeleton } from 'components/Skeleton';
import { media } from './media';

export const ResponsiveGrid = ({
    data,
    deletedData,
    multiplySelection,
    loading,
}) => {
    return (
        <Box sx={{ flexGrow: 1, pb: data?.length > 0 && 3 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ justifyContent: 'center' }}
            >
                {media(
                    data,
                    loading,
                    Grid,
                    CustomSkeleton,
                    ActionAreaCard,
                    multiplySelection,
                    deletedData
                )}
            </Grid>
        </Box>
    );
};
