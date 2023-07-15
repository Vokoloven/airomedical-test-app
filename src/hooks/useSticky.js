import { useState, useEffect } from 'react';

export const useSticky = () => {
    const [sticky, setSticky] = useState(false);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop > 64 ? setSticky(true) : setSticky(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    return sticky;
};
