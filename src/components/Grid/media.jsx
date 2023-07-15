export const media = (
    data,
    loading,
    Grid,
    CustomSkeleton,
    ActionAreaCard,
    multiplySelection,
    deletedData
) => {
    if (loading.status === 'pending') {
        return Array.from(Array(15)).map((_, index) => (
            <Grid item xs={3} sm={4} md={3.5} key={index}>
                <CustomSkeleton />
            </Grid>
        ));
    }
    if (loading.status === 'succeeded') {
        return data.map((recipe) => (
            <Grid item xs={3} sm={4} md={3.5} key={recipe.id}>
                <ActionAreaCard
                    recipe={recipe}
                    multiplySelection={multiplySelection}
                    deletedData={deletedData}
                />
            </Grid>
        ));
    }
};
