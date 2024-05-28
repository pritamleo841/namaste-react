import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class AboutUs extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <h1>Mealicious About Page</h1>
        <div>
          Logged In User : 
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <p>
          Mealicious - M3eals are delicious is a personal project by developer
          <b>&nbsp;Pritam Sharma!</b>
        </p>
  
        <UserClass />
      </>
    );
  }
}

export default AboutUs;
