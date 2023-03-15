import { useEffect, useState } from 'react';

export const useResize = () => {
    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight});

    const onResize = () => {
        setSize({width: window.innerWidth, height: window.innerHeight});
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return size;
};