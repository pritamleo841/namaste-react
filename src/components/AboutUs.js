import UserClass from "./UserClass";
import { Component } from "react";
class AboutUs extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <h1>Mealicious About Page</h1>
        <p>
          Mealicious - Meals are delicious is a personal project by developer
          <b>&nbsp;Pritam Sharma!</b>
        </p>
  
        <UserClass name={"child1"} location={"Kolkata"}/>
      </>
    );
  }
}

export default AboutUs;
