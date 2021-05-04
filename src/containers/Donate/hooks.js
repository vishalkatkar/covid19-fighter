import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase";
import { validationRegex } from '../../utils/utils';

export const useDonate = (type) => {
  const history = useHistory();
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
  const [errMessage, seterrMessage] = useState('');
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const dateVal = `${date}/${month}/${year}`

  useEffect(() => {
    if (pinCode && pinCode.length === 6) {
      const apiURL = "https://api.postalpincode.in/pincode/";
      const fetchData = async () => {
      const response = await axios.get(apiURL + pinCode);
      const { PostOffice = [], Status = "" } = response.data[0];

        if (Status == "Success") {
          const { Region = "", State = "" } = PostOffice[0];
          setState(State);
          setCity(Region);
          setPostOffice(PostOffice);
          setIsError(false);
        } else {
          setIsError(true);
          seterrMessage("Please Enter Valid Pincode!");
        }
      };
      fetchData();
    }
  }, [pinCode]);

  const handleSubmit = () => {
    let isValid = validation();
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
      
      if(isValid) {
        setIsError(false);
        const donerlistRef = firebase.database().ref(reqType);
        donerlistRef.push().set(reqObject);
        history.push(`/dashboard`);
      }
    } catch (err) {
      setIsError(true);
      seterrMessage(err);
    }
  };

  const validation = () => {
    setIsError(true);
    if (!donateType) {
      seterrMessage("Please Select Type!")
      return false;
    } else if(!donarName || !(validationRegex.nameRegex.test(donarName))) {
      seterrMessage("Please Enter Valid Name!")
      return false;
    } else if(!mobileNumber || !(validationRegex.mobile.test(mobileNumber))) {
      seterrMessage("Please Enter Valid Mobile Number!")
      return false;
    } else if (!age) {
      seterrMessage("Please Select Age!")
      return false;
    } else if (!pinCode || !(validationRegex.pincode.test(pinCode))) {
      seterrMessage("Please Enter Valid Pincode!")
      return false;
    } else {
      setIsError(false);
      return true
    }
  }

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
    errMessage,
    setIsError
  };
};
