import { useEffect } from "react";

/**
 * Hook that listen to the document click and apply a callback
 * @param callback
 */
export function useDocumentClick(callback: Function)
{
    const handleClick = () => {
        callback();
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    });
}