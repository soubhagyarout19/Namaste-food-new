import { useRouteError } from "react-router-dom";

const Error = ()=>{
    let {status,statusText,data} = useRouteError();
    return(
        <>
            <h1>Oops!</h1>
            <h2>Something Went Wrong!</h2>
            <h2>{status}{" "}{statusText}</h2>
            <h3>{data}</h3>
        </>
    )
}

export default Error;