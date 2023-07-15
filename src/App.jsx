import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import BasicAppBar from 'components/AppBar';
import Recipes from 'pages/Recipes';
import Recipe from 'pages/Recipe';
import { useFetch } from 'hooks';
import { CustomizedSnackbars } from 'components/Snackbar';

export const App = () => {
    useFetch();
    return (
        <>
            <CssBaseline />
            <Container maxWidth={'xl'}>
                <Routes>
                    <Route path={'/'} element={<BasicAppBar />}>
                        <Route index element={<Recipes />} />
                        <Route path={'recipe/:recipeId'} element={<Recipe />} />
                    </Route>
                </Routes>
                <CustomizedSnackbars />
            </Container>
        </>
    );
};
