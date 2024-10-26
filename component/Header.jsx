import { useState } from "react";
import { LOGO_URL } from "../utils/contant";
import { Link } from "react-router-dom";
import useoffline from "../utils/useoffline";
import {useSelector} from "react-redux";

const Header = () => {
const [login,setlogin]=useState("login")

const onlinestatus= useoffline();

const cartItems = useSelector((store) => store.cart.item);
console.log(cartItems);


    return(
        <div className="flex justify-between shadow-md sticky top-0 backdrop-blur-lg">
        <div className="header-logo">
            <img className="w-48" src={LOGO_URL}></img>
        </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-5">
                <li className="px-5 text-xl">
                    Network:{onlinestatus ? "🌍":"🚨"}
                </li>
                <li className="px-5 text-xl">
                <Link to ="/">Home</Link>
                </li>
                <li className="px-5 text-xl">
                <Link to ="/about" >About us</Link>
                </li>
                <li className="px-5 text-xl"><Link to="/Contact">Contact</Link></li>
                <li className="px-5 text-xl"><Link to="/Cart">Cart({cartItems.length})</Link></li>
                <button className="px-5 text-xl" onClick={()=>{login==="login"?
                setlogin("logout"):
                setlogin("login")}}
                >{login}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header