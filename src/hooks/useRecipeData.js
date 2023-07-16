import { useEffect } from 'react';
import { useBeerStore } from 'zustandStore';

export const useRecipeData = (selectedData, deletedData, setDeletedData) => {
    const {
        deletedRecipes,
        setActiveButton,
        setSelectedRecipes,
        setDeletedRecipes,
        isActiveButton,
    } = useBeerStore((state) => state);

    useEffect(() => {
        deletedRecipes.length === 0
            ? setActiveButton(false)
            : setActiveButton(true);

        return () => {};
    }, [deletedRecipes, setActiveButton]);

    useEffect(() => {
        if (!isActiveButton) {
            setDeletedData([]);
        }
    }, [isActiveButton, setDeletedData]);

    useEffect(() => {
        setSelectedRecipes(selectedData);

        return () => {};
    }, [selectedData, setSelectedRecipes]);

    useEffect(() => {
        setDeletedRecipes(deletedData);

        return () => {};
    }, [deletedData, setDeletedRecipes]);
};
