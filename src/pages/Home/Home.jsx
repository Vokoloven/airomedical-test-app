import { useState, useEffect } from 'react';
import { ResponsiveGrid } from 'components/Grid';
import Box from '@mui/material/Box';
import { useFetch } from 'hooks';
import { useBeerStore } from 'zustandStore';
import { handleData, isRecipeInDeletedList } from 'helpers';

const Home = () => {
    useFetch();
    const { data } = useBeerStore((state) => state);
    const [selectedData, setSelectedData] = useState([]);
    const [deletedData, setDeletedData] = useState([]);

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

    useEffect(() => {
        setSelectedData(data);
    }, [data]);

    return (
        <Box sx={{ px: 3 }}>
            <ResponsiveGrid
                data={data}
                deletedData={deletedData}
                multiplySelection={multiplySelection}
            />
        </Box>
    );
};

export default Home;
