import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBeerStore } from 'zustandStore';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { deepPurple } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Recipe = () => {
    const { data, setActiveButton } = useBeerStore((state) => state);
    const { recipeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setActiveButton(false);
    }, [setActiveButton]);

    const recipe = data.find((recipe) => recipe.id === Number(recipeId));

    return (
        <Paper
            elevation={3}
            sx={(theme) => ({
                display: 'flex',
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                },
            })}
        >
            <Box
                component={'img'}
                src={recipe?.image_url}
                sx={{ height: '500px', p: 2, objectFit: 'contain' }}
            />
            <Box sx={{ p: 2 }}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    variant="contained"
                    sx={{
                        bgcolor: deepPurple[500],
                        '&:hover': {
                            bgcolor: deepPurple[700],
                        },
                        mb: 2,
                    }}
                    onClick={() => navigate(-1)}
                >
                    <Typography variant={'button'} sx={{ color: '#fff' }}>
                        Back
                    </Typography>
                </Button>
                <Typography variant="h5" component="div">
                    {recipe?.name} ({recipe?.tagline})
                </Typography>
                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                    Description: {recipe?.description}
                </Typography>
                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                    pH: {recipe?.ph}
                </Typography>
                <Typography variant="h6" component="div">
                    SRM: {recipe?.srm}
                </Typography>
                <Typography variant="h6" component="div">
                    IBU: {recipe?.ibu}
                </Typography>
                <Typography variant="h6" component="div">
                    EBC: {recipe?.ebc}
                </Typography>
            </Box>
        </Paper>
    );
};

export default Recipe;
