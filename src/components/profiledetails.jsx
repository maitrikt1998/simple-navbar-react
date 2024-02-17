import React from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import UserPost from "./userposts";
import UserFriend from "./userfriends";

function ProfileDetails({ userdata }){
    const { username } = useParams();
    const user = userdata.find(userdata => userdata.username === username);
   
    return(
        <>
        {
            user?(
                <>
                    <h1>ProfileDetails Page</h1>
                    <h3>Username is: {username}</h3>
                    <h3>Name is: {user.name}</h3>
                    <h3>Designation is: {user.Role}</h3>
                    <Link to={`/profile/${username}/posts` }>Posts</Link><br />
                    <Link to={`/profile/${username}/friends`}>Friends</Link>
                    <Routes>
                        <Route path="posts" element={<UserPost />}>Posts</Route>
                        <Route path="friends" element={<UserFriend  userdata={userdata} />}>Friends</Route>
                    </Routes>
                </>

            ):(
                <>
                    <h1>ProfileDetails Page</h1>
                    <h2>Profile Not Found</h2>
                </>
            )
        }
        <Outlet />
            
        </>
    )
}

export default ProfileDetails;