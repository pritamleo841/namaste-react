import { useRouteError } from "react-router";

const Error = () =>{
    const err = useRouteError();
    return (
        <>
            <h1>Oops! Something went wrong...</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </>
    )
}

export default Error;