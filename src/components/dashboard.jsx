import React, { useRef, useState, useContext } from "react";
import { profile } from '../App'
import { toast } from "react-toastify";
import Hardik from "./Hardik";

function Dashboard(){

    const passref = useRef();
    const [state, setstate] = useContext(profile)
    const  [user , setUser] = useState('');
    const  [pass , setPass] = useState('');
    const [input, setInput] = useState([
        {
            username: "hardik",
            password: "hardik123"
        },
        {
            username: "paavan",
            password: "paavan123"
        },
        {
            username: "mohit",
            password: "mohit123"
        },
        {
            username: "1",
            password: "1"
        }
    ])

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handlePassChange = (event) => {
        setPass(event.target.value);
    };

    const showBtn = () =>{
        if(passref.current.type === "password"){
            passref.current.type = "text";
        }else{
            passref.current.type = "password";
        }
    }

    const loginevent = () =>{
        if( user === "" && pass === ""){
            toast.error("Please Enter Value");
        }else{
            let data = input.filter((val)=>{
                return val.username.includes(user);
            });
            let data1 = input.filter((val)=>{
                return val.password.includes(pass);
            });
            if (data === "") {
                toast.error("Data Invalid")
                setUser("")
                setPass("")
            } else {
                if (data[0].username === user && data[0].password === pass) {
                    toast.success("Logged in Successfully")
                    setstate(data)
                }
                else {
                    toast.error("Data Invalid")
                    setUser('')
                    setPass('')
                }
            }
        }
    }
    return(
        <>
            <div className="main">
                {
                     state != undefined ? (
                        <Hardik />
                    ) :(
                        <>
                            <h1>Login</h1>
                            <input type="text" title="username" value={user}  onChange={handleUserChange} placeholder="Enter Username"/><br /> 
                            <input type="password" title="password" value={pass} onChange={handlePassChange} placeholder="Enter Password" ref={passref} /><span ><button className="showbtn"onClick={showBtn}>👁️</button></span><br />
                            <button id="btn" onClick={loginevent}>Submit</button>
                        </>
                        
                    )
                }
                
            </div>
        
        </>
        
    )

}

export default Dashboard;