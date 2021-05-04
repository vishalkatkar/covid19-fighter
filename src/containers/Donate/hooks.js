import { useState, useEffect } from "react";
import firebase from "../../firebase";
import axios from "axios";

export const useDonate = (type) => {
  console.log({ type: type });
  const [donateType, setDonateType] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [pinCode, setPincode] = useState(null);
  const [donarName, setName] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [age, setAge] = useState(null);
  const [noOfCylinder, setNoOfCylinder] = useState(null);
  const [bloodGroup, setBloogGroup] = useState(null);
  const [medicineName, setMedicineName] = useState(null);
  const [noOfBed, setNoOfbed] = useState(null);
  const [block, setBlock] = useState(null);
  const [postOffice, setPostOffice] = useState([]);
  const [isError, setIsError] = useState(false);
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const dateVal = `${date}/${month}/${year}`

  useEffect(() => {
    if (pinCode && pinCode.length === 6) {
      const apiURL = "https://api.postalpincode.in/pincode/";

      const fetchData = async () => {
        const response = await axios.get(apiURL + pinCode);
        console.log({ response: response });
        const { PostOffice = [], Status = "" } = response.data[0];

        const { Region = "", State = "" } = PostOffice[0];

        if (Status == "Success") {
          setState(State);
          setCity(Region);
          setPostOffice(PostOffice);
        }
      };
      fetchData();
    }
  }, [pinCode]);

  const handleSubmit = () => {
    let reqType = '';
    try {
      if (type == "donar") {
        reqType = "donarsList";
      } else {
        reqType = "seekersList";
      }
      
      const reqObject = {
        donateType: donateType,
        donarName: donarName,
        mobileNumber: mobileNumber,
        age: age,
        pinCode: pinCode,
        state: state,
        city: city,
        block: block,
        noOfCylinder: noOfCylinder || "",
        bloodGroup: bloodGroup || "",
        medicineName: medicineName || "",
        noOfBed: noOfBed || "",
        postedDate: dateVal,
      };

      console.log({reqObject:reqObject});
      const donerlistRef = firebase.database().ref(reqType);
      donerlistRef.push().set(reqObject);
    } catch (err) {
      console.log("error::", err);
    }
  };

  return {
    handleSubmit,
    setDonateType,
    donateType,
    state,
    city,
    setPincode,
    setName,
    setMobileNumber,
    setNoOfCylinder,
    setBloogGroup,
    setMedicineName,
    setNoOfbed,
    setAge,
    setBlock,
    postOffice,
    isError,
  };
};
