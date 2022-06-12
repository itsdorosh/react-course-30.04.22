import { Link } from "react-router-dom";

export function NotFound () {
    return (<>
        <h1>PAGE NOT FOUND!</h1>
        <p>Sorry, you need to go to <Link to="/">home page</Link>!</p>
    </>);
}