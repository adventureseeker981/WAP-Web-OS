import {useState} from "react";
import './Taskbar.css'
import User from "../assets/archcraft-wallpapers/archcraft-backgrounds/files/User.png"
import LogOut from "../assets/Catppuccin-Perfect-Icons/icons/snowpack.svg";
import math from "../assets/Catppuccin-Perfect-Icons/calculator_23810.png";
import Images from "../assets/Catppuccin-Perfect-Icons/icons/folder_images.svg";
import Mc from "../assets/Catppuccin-Perfect-Icons/minecraft_icon_138374.png"
import Scicalc from "./Applications/SciCalc.jsx";
import {Gallery} from "./Applications/Gallery.jsx";
import {Minecraft} from "./Applications/Minecraft.jsx";
export default function Taskbar(props) {
        const [date, setdate] = useState(new Date().toString().slice(0, 15));
        const [time, setTime] = useState(new Date().toString().slice(16, 21));
        const [showScicalc, setShowScicalc] = useState(false);
        const [showGallery, setShowGallery] = useState(false);
        const [showMinecraft, setShowMinecraft] = useState(false);
        const interval = setInterval(() => {
            setdate(new Date().toString().slice(0, 15))
            setTime(new Date().toString().slice(16, 21))
        }, 1000);
                return (
                    <>
                        <div id={"upbar"}>
                            <p id={"text"}>LOGOUT</p>
                            <div id={"profile"}>
                                <p id={"usern"}>{props.username}</p>
                                <button id={"button"} style={{border: "none"}} onClick={props.onLogout}><img src={LogOut} id={"logout"}/></button>
                            </div>
                        </div>

                        <div id={"AppBar"}>
                            <div id={"AppBarheader"}>
                                <img src={math}  className={"Icons"} onClick={() => {
                                    showScicalc?setShowScicalc(false):setShowScicalc(true)
                                }}/>
                                <img src={Images} className={"Icons"} onClick={() => {
                                    showGallery?setShowGallery(false):setShowGallery(true)
                                }}/>
                                <img src={Mc} className={"Icons"} onClick={() => {
                                    showMinecraft?setShowMinecraft(false):setShowMinecraft(true)
                                }}/>
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
                        <div id={"App1"}>
                        {showScicalc && <Scicalc />}
                        {showGallery && <Gallery />}
                        {showMinecraft && <Minecraft />}
                            </div>
                    </>
                )}
/*dragElement(document.getElementById("AppBar"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }*/