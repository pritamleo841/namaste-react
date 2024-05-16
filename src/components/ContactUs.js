import { EMAIL_ID,MOBILE_NO } from "../utils/constants";
const ContactUs = () =>{
    return (
        <>
            <h1>Mealicious Contact Page </h1><br></br>
            <div>
                <a href={"mailto:"+ EMAIL_ID}>Email Me 📩</a><br></br>
                <a href={"tel:"+MOBILE_NO}>Call Me ☎</a>
            </div>
        </>
    )
}

export default ContactUs;