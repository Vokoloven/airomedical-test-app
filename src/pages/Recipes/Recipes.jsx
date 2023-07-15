import { useState, useEffect } from 'react';
import { ResponsiveGrid } from 'components/Grid';
import Box from '@mui/material/Box';
import { useRecipeData } from 'hooks';
import { useBeerStore } from 'zustandStore';
import { handleData, isRecipeInDeletedList } from 'helpers';

const Recipes = () => {
    const { data, loading } = useBeerStore((state) => state);
    const [selectedData, setSelectedData] = useState([]);
    const [deletedData, setDeletedData] = useState([]);
    useRecipeData(selectedData, deletedData);

    useEffect(() => {
        setSelectedData(data);
}, [data]);

    const multiplySelection = (id, e) => {
        if (e.nativeEvent.button === 0) {
            console.log('Left click');
        } else if (e.nativeEvent.button === 2) {
            console.log('Left click');

            handleData(
                isRecipeInDeletedList(deletedData, id),
                selectedData,
                deletedData,
                setSelectedData,
                setDeletedData,
                id
            );
        }
    };

    return (
        <Box sx={{ px: 3 }}>
            <ResponsiveGrid
                data={data.slice(0, 15)}
                deletedData={deletedData}
                multiplySelection={multiplySelection}
                loading={loading}
            />
        </Box>
    );
};

export default Recipes;
