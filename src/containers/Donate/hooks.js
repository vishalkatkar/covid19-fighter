import { useState, useEffect } from "react";
import firebase from "../../firebase";
import axios from 'axios';

export const useDonate = () => {
  const [donateType, setDonateType] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [pinCode, setPincode] = useState(null);
  const [donarName, setName] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [noOfCylinder, setNoOfCylinder] = useState(null);
  useEffect(() => {
    if(pinCode && pinCode.length === 6) {
      const apiURL = "https://api.postalpincode.in/pincode/";

        const fetchData = async () => {
          const response = await axios.get(apiURL+pinCode)
          const {
            Message = '', 
            PostOffice = [],
            Status = ''
          } = response.data[0];

          const {
            Region = '',
            State = ''
          } = PostOffice[0];

          if(Status == "Success") {
            setState(State);
            setCity(Region);
          }
        }
        fetchData();
    }
  }, [pinCode]);

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
    state,
    city,
    setPincode,
    setName,
    setMobileNumber,
    setNoOfCylinder,
  };
};
