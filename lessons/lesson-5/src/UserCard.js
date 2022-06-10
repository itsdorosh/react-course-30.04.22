import { useContext } from "react";
import { filterContext } from "./contexts/filterContext";

export function UserCard () {
    const filter = useContext(filterContext);
    return (
        <>
            <h1>{filter}</h1>
        </>
    );
}