import {useState} from "react";
import './Taskbar.css'
import User from "../assets/archcraft-wallpapers/archcraft-backgrounds/files/User.png"
import LogOut from "../assets/Catppuccin-Perfect-Icons/icons/snowpack.svg"
import {LoginPage} from "./LoginPage.jsx";
export default function Taskbar(props) {

    const [date, setdate] = useState(new Date().toString().slice(0, 15));
    const [time, setTime] = useState(new Date().toString().slice(16, 24));

    const [logout, setLogout] = useState(false);

    if (logout){
        return <LoginPage/>
    }

    setInterval(() => {
        setdate(new Date().toString().slice(0, 15))
        setTime(new Date().toString().slice(16, 24))
    }, 1000);

                return (
                    <>
                        <div id={"upbar"}>
                            <p id={"text"}>LOGOUT</p>
                            <div id={"profile"}>
                                <p id={"usern"}>{props.username}</p>
                                <button id={"button"} style={{border: "none"}} onClick={() => setLogout(true)}><img src={LogOut} id={"logout"}/></button>
                            </div>
                        </div>
                        <div id={"downbar"}>
                            <p id={"date"}>{date}</p>
                            <p id={"date"}>{time}</p>
                            <div id={"profile"}>
                            <p id={"usern"}>{props.username}</p>
                            <img src={User} id={"UserImage"}/>
                            </div>
                        </div>
                    </>
                )}