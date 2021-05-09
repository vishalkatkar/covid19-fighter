import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import moment from "moment";
import firebase from "../../firebase";
import { validationRegex } from "../../utils/utils";
import { COVID_HELP_MAIN_CATEGORY } from "../../constants";

export const useDonate = (type) => {
  const history = useHistory();
  const [donateType, setDonateType] = useState(null);
  const [donarName, setName] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [age, setAge] = useState(null);
  const [noOfCylinder, setNoOfCylinder] = useState(null);
  const [bloodGroup, setBloogGroup] = useState(null);
  const [noOfUnits, setNoOfUnits] = useState(null);
  const [hospitalName, setHospitalName] = useState(null);
  const [medicineName, setMedicineName] = useState(null);
  const [noOfBed, setNoOfbed] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errMessage, seterrMessage] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const gotoHome = () => {
    toggle();
    history.push("/");
  };

  const handleSubmit = ({
    pinCode = "",
    state = "",
    city = "",
    block = "",
  }) => {
    let isValid = validation();
    let reqType = "";
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
        noOfUnits: noOfUnits || "",
        hospitalName: hospitalName || "",
        medicineName: medicineName || "",
        noOfBed: noOfBed || "",
        postedDate: moment().format(),
      };

      if (isValid) {
        if (!pinCode || pinCode.length !== 6) {
          seterrMessage("Enter valid pincode!");
          return false;
        }
        setIsError(false);
        const donerlistRef = firebase.database().ref(reqType);
        donerlistRef.push().set(reqObject);
        toggle();
      }
    } catch (err) {
      setIsError(true);
      seterrMessage(err);
    }
  };

  const validation = () => {
    setIsError(true);

    if (!donateType) {
      seterrMessage("Please select donation type!");
      return false;
    } else if (!donarName || !validationRegex.nameRegex.test(donarName)) {
      seterrMessage("Please name!");
      return false;
    } else if (!mobileNumber || !validationRegex.mobile.test(mobileNumber)) {
      seterrMessage("Please enter valid mobile number!");
      return false;
    }
    // else if (!age) {
    //   seterrMessage("Please enter age!");
    //   return false;
    // }
    else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[1].value &&
      !noOfCylinder
    ) {
      seterrMessage("Please enter number of cylinders!");
      return false;
    } else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[0].value &&
      !bloodGroup
    ) {
      seterrMessage("Please select blood group!");
      return false;
    } else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[2].value &&
      !medicineName
    ) {
      seterrMessage("Please enter medicine name!");
      return false;
    } else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[3].value &&
      !noOfBed
    ) {
      seterrMessage("Please enter number of beds!");
      return false;
    } else {
      setIsError(false);
      return true;
    }
  };

  return {
    handleSubmit,
    setDonateType,
    donateType,
    setName,
    setMobileNumber,
    setNoOfCylinder,
    setBloogGroup,
    setNoOfUnits,
    setHospitalName,
    setMedicineName,
    setNoOfbed,
    setAge,
    isError,
    errMessage,
    setIsError,
    modal,
    gotoHome,
  };
};

export const usePinCode = () => {
  const [pinCode, setPincode] = useState(null);
  const [postOffice, setPostOffice] = useState([]);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [block, setBlock] = useState(null);
  const [isLocationError, setIsLocationError] = useState(false);
  const [errMessage, seterrMessage] = useState("");

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
          setIsLocationError(false);
        } else {
          setIsLocationError(true);
          seterrMessage("Please Enter Valid Pincode!");
        }
      };
      fetchData();
    } else {
      setState(null);
      setCity(null);
      setPostOffice(null);
      setIsLocationError("Please Enter Valid Pincode!");
    }
  }, [pinCode]);

  return {
    pinCode,
    state,
    city,
    block,
    postOffice,
    isLocationError,
    setPincode,
    setBlock,
    setIsLocationError,
    locationErrMsg: errMessage,
  };
};
