import { useEffect, useState, useCallback } from 'react';

export default function useMaxSize(width: number) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleWindowResize = useCallback(() => {
        setWindowSize(window.innerWidth);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleWindowResize);
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }
    }, [handleWindowResize]);

    return windowSize <= width;
}
