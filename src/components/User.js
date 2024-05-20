import { useState } from "react";

const User = () =>{
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h1>Name : Pritam Sharma</h1>
            <h2>Location : Kolkata</h2>
            <h2>Contact : sharmapritam841@gmail.com</h2>
        </div>
    )
}

export default User;