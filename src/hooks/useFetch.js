import { useEffect, useRef } from 'react';
import { getApiData } from 'service';
import { useBeerStore } from 'zustandStore';

export const useFetch = () => {
    const { setData, setLoading } = useBeerStore((state) => state);
    const isFirstRender = useRef(true);

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
            getData({ page: 1 });

            return () => {
                isFirstRender.current = false;
            };
        }
    }, [setData, setLoading]);
};
