import { useEffect, useRef } from 'react';
import { getApiData } from 'service';
import { useBeerStore } from 'zustandStore';

export const useFetch = (page) => {
    const { setData } = useBeerStore((state) => state);
    // const { data } = useBeerStore((state) => state);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const getData = async (page) => {
            const data = await getApiData({ page });
            setData(data);
        };

        if (isFirstRender.current && page === 1) {
            getData(page);

            return () => {
                isFirstRender.current = false;
            };
        } else if (page > 1) {
            getData(page);
        }
    }, [page, setData]);
};
