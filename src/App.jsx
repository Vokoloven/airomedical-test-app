import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import BasicAppBar from 'components/AppBar';
import Home from 'pages/Home';

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth={'xl'}>
                <Routes>
                    <Route path={'/'} element={<BasicAppBar />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Container>
        </>
    );
};
