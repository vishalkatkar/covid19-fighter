import React, { useState } from "react";
import firebase from "firebase";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Donate = () => {
  const [donateType, setDonateType] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [donarName, setName] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [noOfCylinder, setNoOfCylinder] = useState(null);

  const handleSubmit = () => {
    debugger;
    try {
      console.log("test");
      const reqObject = {
        donateType: donateType,
        state: state,
        city: city,
        donarName: donarName,
        mobileNumber: mobileNumber,
        noOfCylinder: noOfCylinder,
      };
      firebase.database().ref("donarsList/").set(reqObject);
    } catch (err) {
      console.log("error::", err);
    }
  };

  return (
    <Form>
      <select required onChange={(e) => setDonateType(e.target.value)}>
        <option value="" selected>
          What you want to donate?
        </option>
        <option value="oxygen">oxygen</option>
        <option value="plasma">plasma</option>
        <option value="medicine">medicine</option>
      </select>
      <select required onChange={(e) => setState(e.target.value)}>
        <option value="" selected>
          State
        </option>
        <option value="maharashtra">Maharashtra</option>
        <option value="utterpradesh">Utterpradesh</option>
        <option value="delhi">Delhi</option>
      </select>
      <select required onChange={(e) => setCity(e.target.value)}>
        <option value="" selected>
          City
        </option>
        <option value="pune">Pune</option>
        <option value="kanpur">Kanpur</option>
        <option value="delhi">Delhi</option>
      </select>
      <Input
        placeholder="name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="mobile number"
        required
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <Input
        placeholder="No of cylinder want to donate"
        onChange={(e) => setNoOfCylinder(e.target.value)}
      />
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default Donate;
