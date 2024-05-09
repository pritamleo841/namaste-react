import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./public/images/foodAppLogo.png";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Orders</li>
                </ul>
            </div>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body-container">
            <div className="search-bar">

            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);