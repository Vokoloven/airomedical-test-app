import { useEffect, useRef } from 'react';

export const useFonts = () => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href =
                'https://fonts.googleapis.com/icon?family=Material+Icons';
            document.head.appendChild(link);

            return () => {
                isFirstRender.current = false;
            };
        }
    }, []);
};
