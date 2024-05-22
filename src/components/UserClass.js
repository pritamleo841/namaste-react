import React from "react";
import {GIT_GET_USER_API,EMAIL_ID} from "../utils/constants";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //same as useState
        this.state = {
            userInfo:{
                name:"Dummy",
                location:"default",
                email:"default",
                avatar_url:""
            }
        }
    }
    //same effect as useEffect but have differences
    async componentDidMount(){
        const data = await fetch(GIT_GET_USER_API);
        const json = await data.json();
        //setState for api data
        this.setState({
            userInfo:json
        });
    }

    render(){
        const {name,location,email,avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="Avatar Url"/>
                <h1>Name : {name}</h1>
                <h2>Location : {location}</h2>
                <h2>Contact : {email || EMAIL_ID} </h2>
            </div>
        )
    }
}

export default UserClass;