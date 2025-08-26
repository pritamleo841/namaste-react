import logo from "../assets/images/foodAppLogo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the Redux store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-lg bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-24 md:w-32 lg:w-36 object-contain" src={logo} alt="Food App Logo" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center space-x-6 md:space-x-8 lg:space-x-12 text-gray-700 font-medium text-sm md:text-base">
          <li className="flex items-center space-x-2">
            <span>Ready to deliver?</span>
            <span className="text-xl">{onlineStatus ? "🟢" : "🔴"}</span>
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-500 transition-colors">Grocery</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart" className="hover:text-blue-500 transition-colors">Cart ({cartItems.length})</Link>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold text-gray-900">{loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;