import { useParams } from 'react-router-dom';
import { useBeerStore } from 'zustandStore';
import Paper from '@mui/material/Paper';

const Recipe = () => {
    const { data } = useBeerStore((state) => state);
    const { recipeId } = useParams();

    const recipe = data.find((recipe) => recipe.id === Number(recipeId));

    return <Paper elevation={3}></Paper>;
};

export default Recipe;
