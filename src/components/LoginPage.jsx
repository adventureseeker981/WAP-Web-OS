import User from "../assets/archcraft-wallpapers/archcraft-backgrounds/files/User.png"
import {useState} from "react";
import Taskbar from "./Taskbar.jsx";
import './LoginPage.css'
export function LoginPage() {
    const [UserName, SetUserName] = useState("")
    const [PassWord, SetPassWord] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function login(){
        if (UserName === "Vinayak" && PassWord === "Vinayak@9981") {
            setIsLoggedIn(true)
        }
    }
    return (
        <>
            {isLoggedIn ? <Taskbar  id="taskbar"
                                    username={UserName}
                                    onLogout={() => {
                setIsLoggedIn(false);
                SetUserName("");
                SetPassWord("");
            }}/> : (
            <div className="LoginCreds">
                <img src={User} id="userimage" alt="user"/>
                <br/>
                <input type="text" placeholder="Type Username" id={"username"} onChange={(e) => SetUserName(e.target.value)} autoComplete="off"/>
                <br/><br/><br/>
                <input type="password" placeholder={"Password"} id={"password"} onChange={(e) => SetPassWord(e.target.value)} /><br/><br/>
                <p id={"alert"}>{(PassWord.length>0&&PassWord.length<8)?"Password Too Short":""}</p>
                {login()}
            </div>)}
        </>
    )


}