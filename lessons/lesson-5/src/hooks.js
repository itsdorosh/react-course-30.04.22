import { useEffect, useState } from "react";

export function useLocalStorage (key, initialValue = '') {
    const [value, setValue] = useState(localStorage.getItem(key) || initialValue);
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);
    return [value, setValue];
}