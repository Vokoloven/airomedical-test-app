/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ActionAreaCard } from 'components/Card';

export const ResponsiveGrid = ({ data, deletedData, multiplySelection }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ justifyContent: 'center' }}
            >
                {data.map((recipe) => (
                    <Grid item xs={3} sm={4} md={3.5} key={recipe.id}>
                        <ActionAreaCard
                            recipe={recipe}
                            multiplySelection={multiplySelection}
                            deletedData={deletedData}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
