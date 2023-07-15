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
    // const media = () => {
    //     if (loading.status === 'pending') {
    //         return Array.from(Array(15)).map((_, index) => (
    //             <Grid item xs={3} sm={4} md={3.5} key={index}>
    //                 <CustomSkeleton />
    //             </Grid>
    //         ));
    //     }
    //     if (loading.status === 'succeeded') {
    //         return data.map((recipe) => (
    //             <Grid item xs={3} sm={4} md={3.5} key={recipe.id}>
    //                 <ActionAreaCard
    //                     recipe={recipe}
    //                     multiplySelection={multiplySelection}
    //                     deletedData={deletedData}
    //                 />
    //             </Grid>
    //         ));
    //     }
    // };

    return (
        <Box sx={{ flexGrow: 1 }}>
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
                {/* {media()} */}
            </Grid>
        </Box>
    );
};
