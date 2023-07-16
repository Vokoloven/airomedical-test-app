import { useEffect, useRef, useState } from 'react';
import { getApiData } from 'service';
import { useBeerStore } from 'zustandStore';

export const useFetch = () => {
    const [page, setPage] = useState(1);
    const { setData, setLoading, loading, data } = useBeerStore(
        (state) => state
    );
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (
            !isFirstRender.current &&
            data.length === 0 &&
            loading.status === 'succeeded'
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [data.length, loading.status]);

    useEffect(() => {
        setLoading({ status: 'pending', errorMessage: '' });
        const getData = async (page) => {
            try {
                const data = await getApiData(page);
                setData(data);

                setLoading({ status: 'succeeded', errorMessage: '' });
            } catch (error) {
                error &&
                    setLoading({
                        status: 'failed',
                        errorMessage: error.message,
                    });
            }
        };

        if (isFirstRender.current) {
            getData({ page });

            return () => {
                isFirstRender.current = false;
            };
        }

        if (!isFirstRender.current && page > 1) {
            getData({ page });
        }
    }, [page, setData, setLoading]);

    console.log(data);
};
