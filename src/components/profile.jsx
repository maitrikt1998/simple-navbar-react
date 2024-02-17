import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile({ userdata }){
    return(
        
        <>
            <h1>Profile Page</h1>
            <ul>
                {userdata.map((user)=>(
                    <li key={user.username}>
                        <Link to={`/profile/${user.username}`} path=':username'> {user.username}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}

export default Profile;