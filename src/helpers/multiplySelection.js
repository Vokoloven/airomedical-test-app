export const isRecipeInDeletedList = (deletedData, id) => {
    return deletedData.some((recipe) => recipe.id === id);
};

export const handleData = (
    isRecipeInDeletedList,
    selectedData,
    deletedData,
    setSelectedData,
    setDeletedData,
    id
) => {
    const filteredData = (
        !isRecipeInDeletedList ? selectedData : deletedData
    ).reduce(
        (acc, recipe) => {
            if (recipe.id !== id) {
                acc.selected = [...acc.selected, recipe];
            } else {
                acc.deleted = [...acc.deleted, recipe];
            }

            return acc;
        },
        { selected: [], deleted: [] }
    );

    if (!isRecipeInDeletedList) {
        setDeletedData((prevData) => [...prevData, ...filteredData.deleted]);
        setSelectedData(filteredData.selected);
    } else {
        setDeletedData(filteredData.selected);
        setSelectedData((prevData) => [...prevData, ...filteredData.deleted]);
    }
};
