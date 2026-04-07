import { Dock } from 'primereact/dock';
import Taskbar from "./Taskbar";
import './Desktop.css'
export default function Desktop(props){

    return (
        <>
            <div id={"Desktop"}>
            </div>
                <Taskbar username={props.username}/>
        </>
    )
}