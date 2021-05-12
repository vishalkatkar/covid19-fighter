import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import moment from "moment";
import firebase from "../../firebase";
import { validationRegex } from "../../utils/utils";
import { COVID_HELP_MAIN_CATEGORY, PINCODE_API } from "../../constants";

export const useDonate = (type) => {
  const history = useHistory();
  const [donateType, setDonateType] = useState(null);
  const [donateTypeErr, setDonateTypeErr] = useState(null);
  const [donarName, setName] = useState(null);
  const [donarNameErr, setNameErr] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [mobileNumberErr, setMobileNumberErr] = useState(null);
  const [age, setAge] = useState(0);
  const [noOfCylinder, setNoOfCylinder] = useState(null);
  const [noOfCylinderErr, setNoOfCylinderErr] = useState(null);
  const [bloodGroup, setBloogGroup] = useState(null);
  const [bloodGroupErr, setBloogGroupErr] = useState(null);
  const [noOfUnits, setNoOfUnits] = useState(null);
  const [hospitalName, setHospitalName] = useState(null);
  const [medicineName, setMedicineName] = useState(null);
  const [noOfBed, setNoOfbed] = useState(null);
  const [note, setNote] = useState(null);
  const [pincodeErr, setPincodeErr] = useState(null);
  const [isError, setIsError] = useState(false);
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
          setPincodeErr("Enter valid pincode!");
          return false;
        }
        setIsError(false);
        const donerlistRef = firebase.database().ref(reqType);
        donerlistRef.push().set(reqObject);
        toggle();
      }
    } catch (err) {
      setIsError(true);
    }
  };

  const validation = () => {
    setIsError(true);
    setDonateTypeErr(null);
    setNameErr(null);
    setMobileNumberErr(null);
    setNoOfCylinderErr(null);
    setBloogGroupErr(null);

    if (!donateType) {
      setDonateTypeErr("Please select donation type!");
      return false;
    } else if (!donarName || !validationRegex.nameRegex.test(donarName)) {
      setNameErr("Please enter valid name!");
      return false;
    } else if (!mobileNumber || !validationRegex.mobile.test(mobileNumber)) {
      setMobileNumberErr("Please enter valid mobile number!");
      return false;
    }
    else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[1].value &&
      !noOfCylinder
    ) {
      setNoOfCylinderErr("Please enter number of cylinders!");
      return false;
    } else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[0].value &&
      !bloodGroup
    ) {
      setBloogGroupErr("Please select blood group!");
      return false;
    } else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[2].value &&
      !medicineName
    ) {
      setNoOfCylinderErr("Please enter medicine name!");
      return false;
    } else if (
      donateType &&
      donateType == COVID_HELP_MAIN_CATEGORY[3].value &&
      !noOfBed
    ) {
      setNoOfCylinderErr("Please enter number of beds!");
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
    pincodeErr,
    setIsError,
    modal,
    gotoHome,
    donateTypeErr,
    donarNameErr,
    mobileNumberErr,
    noOfCylinderErr,
    bloodGroupErr
  };
};

export const usePinCode = () => {
  const [pinCode, setPincode] = useState(null);
  const [postOffice, setPostOffice] = useState([]);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [block, setBlock] = useState(null);

  useEffect(() => {
    if (pinCode && pinCode.length === 6) {
      const fetchData = async () => {
        const response = await axios.get(PINCODE_API + pinCode);
        const { PostOffice = [], Status = "" } = response.data[0];

        if (Status == "Success") {
          const { Region = "", State = "" } = PostOffice[0];
          setState(State);
          setCity(Region);
          setPostOffice(PostOffice);
        }
      };
      fetchData();
    } else {
      setState(null);
      setCity(null);
      setPostOffice(null);
    }
  }, [pinCode]);

  return {
    pinCode,
    state,
    city,
    block,
    postOffice,
    setPincode,
    setBlock,
  };
};
