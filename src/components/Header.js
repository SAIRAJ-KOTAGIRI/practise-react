import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    // let btnname = "Login"
    const [btnName, setBtnName] = useState("Login")

    // if there is no dependency array, useEffect will be called on every Render
    // useEffect(() => {
    //     console.log("Use Effect")
    // })
    
    // if there is dependency array => [], useEffect will be called on only intial render (Only Once)
    // useEffect(() => {
    //     console.log("Use Effect")
    // }, [])
    
    // if there is dependency array with value in it=> [btnName], useEffect will be called on when dependency value is updated
    // useEffect(() => {
    //     console.log("Use Effect")
    // }, [btnName])



    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Stauts: {useOnlineStatus() ? "Online" : "offline"}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>
                        setBtnName((btnName == "Login" ? "Logout" : "Login"))
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;