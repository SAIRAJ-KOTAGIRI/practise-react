import { useState } from "react";
const User = ({name}) => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div className="user-card">
            <p>Count: {count}</p>
            <p>Count2: {count2}</p>
            <h2>Name: {name}</h2>
            <h3>Location</h3>
            <h3>Contact</h3>
        </div>
    )
}

export default User;