import React from "react";
import ReactDOM  from "react-dom/client";
import logo from "./public/images/foodAppLogo.png";
import {restaurants} from "./public/resturants/restuarant";

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
};

const RestuarantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,areaName,locality,avgRating,costForTwo,totalRatingsString,sla,cuisines } = resData.info;
    const {slaString} = sla;
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+cloudinaryImageId} alt="res-logo"/>
            <div className="res-card-info">
                <div className="heading">
                    <h3>{name}</h3>
                    <h3>{cuisines.join(', ')}</h3>
                </div>
                <div className="other-info">
                    <h4>{locality}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{totalRatingsString}</h4>
                    <h4>{slaString}</h4>
                </div>
            </div>
        </div>
    )
};

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
               {
                restaurants.map(restuarant=><RestuarantCard key={restuarant.info.id} resData={restuarant}/>)
               }
            </div>
        </div>
    )
};

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);