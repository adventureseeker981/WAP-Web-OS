import User from "../assets/archcraft-wallpapers/archcraft-backgrounds/files/User.png"
import rainy from "../assets/archcraft-wallpapers/archcraft-backgrounds/files/rainy.jpeg"
import './LoginPage.css'
export function LoginPage() {
    return (
        <>

            <div className="LoginCreds">
                <img src={User} id="userimage"/>
                <br/>
                <input type="text" placeholder="Type Username" id={"username"}/>
                <br/><br/><br/>

                <input type="password" placeholder={"Password"} id={"password"}/><br/><br/>

                <button>Login</button>
            </div>
        </>
    )
}