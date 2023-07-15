import { useEffect } from 'react';
import { useBeerStore } from 'zustandStore';

export const useRecipeData = (selectedData, deletedData) => {
    const {
        deletedRecipes,
        setActiveButton,
        setSelectedRecipes,
        setDeletedRecipes,
    } = useBeerStore((state) => state);

    useEffect(() => {
        if (deletedRecipes.length > 0) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }

        return () => {};
    }, [deletedRecipes, setActiveButton]);

    useEffect(() => {
        setSelectedRecipes(selectedData);

        return () => {};
    }, [selectedData, setSelectedRecipes]);

    useEffect(() => {
        setDeletedRecipes(deletedData);

        return () => {};
    }, [deletedData, setDeletedRecipes]);
};
