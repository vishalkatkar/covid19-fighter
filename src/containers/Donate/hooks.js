import { useEffect, useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export const useDonate = () => {
    const [donateType, setDonateType] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [donarName, setName] = useState(null);
    const [mobileNumber, setMobileNumber] = useState(null);
    const [noOfCylinder, setNoOfCylinder] = useState(null);
    const handleSubmit = () => { 
          try {
          const reqObject = {
            donateType: donateType,
            state: state,
            city: city,
            donarName: donarName,
            mobileNumber: mobileNumber,
            noOfCylinder: noOfCylinder,
          };
          const donerlistRef = firebase.database().ref("donarsList");
            donerlistRef.push().set(reqObject);
        } catch (err) {
          console.log("error::", err);
        }
    };

    return { 
        handleSubmit,
        setDonateType,
        setState,
        setCity,
        setName,
        setMobileNumber,
        setNoOfCylinder
    };
}