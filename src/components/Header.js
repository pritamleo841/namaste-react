import logo from "../../public/images/foodAppLogo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () => {
  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  //subscribing to the store using selector
  const cartItems = useSelector((store)=>store.cart.items);

  return (
    <div className="flex justify-between mb-2 px-2 shadow-lg bg-white">
      <div className="logo-container">
        <img className="w-36" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Ready to deliver? {onlineStatus?"🟢":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button className="login-btn" onClick={()=>btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}>{btnName}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
