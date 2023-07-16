import { useEffect, useRef, useState } from 'react';
import { getApiData } from 'service';
import { useBeerStore } from 'zustandStore';

export const useFetch = () => {
    const [page, setPage] = useState(1);
    const { setData, setLoading, data } = useBeerStore((state) => state);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (data?.length === 0) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [data?.length]);

    useEffect(() => {
        setLoading({ status: 'pending', errorMessage: '' });
        const getData = async (page) => {
            try {
                const data = await getApiData(page);
                setData(data);

                setLoading({ status: 'succeeded' });
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
        } else if (page > 1 && !isFirstRender.current) {
            getData({ page });
        }
    }, [page, setData, setLoading]);
};
