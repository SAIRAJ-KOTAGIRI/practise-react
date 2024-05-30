import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return (    
        <div className="container">
            <h1> OOPS SOMETHING WENT WRONG</h1>
            <h1>{err?.data}</h1>
        </div>
    )
}

export default Error