import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    // let btnname = "Login"
    const [btnName, setBtnName] = useState("Login")

    const {loggedInUser} = useContext(UserContext)

    // Subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items)

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
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Stauts: {useOnlineStatus() ? "Online" : "offline"}
                    </li>
                    <li className="px-4 cursor-pointer hover:bg-pink-200"><Link to="/">Home</Link></li>
                    <li className="px-4 cursor-pointer hover:bg-pink-200"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 cursor-pointer hover:bg-pink-200"><Link to="/about">About Us</Link></li>
                    <li className="px-4 cursor-pointer hover:bg-pink-200"><Link to="/contact">Contact Us</Link></li>
                    <li data-testid="cartCount" className="px-4 cursor-pointer hover:bg-pink-200 font-bold"><Link to="/cart">Cart ({cartItems?.length})</Link></li>
                    <button className="login px-4 cursor-pointer hover:bg-pink-200" onClick={() =>
                        setBtnName((btnName == "Login" ? "Logout" : "Login"))
                    }>{btnName}</button>
                    <p className="font-bold">{loggedInUser}</p>
                </ul>
            </div>
        </div>
    )
}

export default Header;