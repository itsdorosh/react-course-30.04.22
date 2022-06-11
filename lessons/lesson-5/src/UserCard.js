import { useFilterContext } from "./contexts/filterContext";

export function UserCard () {
    const filter = useFilterContext(filterContext);
    return (
        <>
            <h1>{filter}</h1>
        </>
    );
}
