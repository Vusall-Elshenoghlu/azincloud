import ContactInfoMap from "./components/contact-info/contact-info.component";
import WriteUsComponent from "./components/write-us/write-us.component";
import {useEffect} from "react";

const  ContactPageComponent=()=>{
    return (
        <>
            <ContactInfoMap/>
            <WriteUsComponent/>
        </>
    );
};
export default ContactPageComponent;