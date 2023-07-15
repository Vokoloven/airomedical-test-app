import { useEffect, useRef } from 'react';
import { getApiData } from 'service';
import { useBeerStore } from 'zustandStore';

export const useFetch = () => {
    const { setData } = useBeerStore((state) => state);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const getData = async (page) => {
            const data = await getApiData(page);

            setData(data);
        };

        if (isFirstRender.current) {
            getData({ page: 1 });

            return () => {
                isFirstRender.current = false;
            };
        }
    }, [setData]);
};
