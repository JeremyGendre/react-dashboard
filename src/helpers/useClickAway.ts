import {RefObject, useEffect} from "react";

/**
 * Hook that listen to a document click event and apply a callback if the currentTarget is not the referenced target
 * @param ref
 * @param callback
 */
export function useClickAway (ref: RefObject<HTMLElement>, callback: Function)
{
    const handleClick = (e: { target: any; }) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
}