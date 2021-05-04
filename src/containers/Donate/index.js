import React, { useState } from "react";
import Header from "../Header";
import { useDonate } from "./hooks";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  UncontrolledAlert,
  ToastBody
} from "reactstrap";
import { COVID_HELP_MAIN_CATEGORY } from "../../constants";

const Donate = (props) => {
  const {
    handleSubmit,
    setDonateType,
    donateType,
    state,
    city,
    setPincode,
    setName,
    setMobileNumber,
    setAge,
    setNoOfCylinder,
    setBloogGroup,
    setMedicineName,
    setNoOfbed,
    setBlock,
    postOffice,
    isError
  } = useDonate();
console.log({postOffice:postOffice});
  return (
    <div style={{
      backgroundImage: `url(https://picsum.photos/200/300/?blur)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: window.innerHeight + 'px'
    }}>
      <Header />
      { isError &&
      <UncontrolledAlert color="danger" className="float-right">
        Please fill all the valid information!
      </UncontrolledAlert>
      }
      <Container className="p-4">
        <Form className="col-md-7 bg-light p-4 rounded-sm" style={{ margin: '0 auto' }} onSubmit={() => handleSubmit("donarsList")}>
          <h3 className="text-center mb-4">Donar Form</h3>
          <FormGroup tag="fieldset">
            <Label for="donationType">Donation Type</Label>
            <FormGroup check className="col-12" required onChange={(e) => setDonateType(e.target.value)}>
              <Label check className="col-3">
                <Input type="radio" checked name="radio1" value="oxygen" />{' '}
                Oxygen
              </Label>
              <Label check className="col-3">
                <Input type="radio" name="radio1" value="plasma" />{' '}
                  Plasma
                </Label>
              <Label check className="col-3">
                <Input type="radio" name="radio1" value="medicine" />{' '}
                  Medicine
                </Label>
              <Label check className="col-3">
                <Input type="radio" name="radio1" value="bed" />{' '}
                  Bed
                </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              placeholder="name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="mobile">Mobile Number</Label>
            <Input
              type="number"
              placeholder="mobile number"
              required
              id="mobile"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              placeholder="Age"
              required
              min={0}
              max={100}
              id="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pincodeSelect">Pincode</Label>
            <Input
              type="number"
              placeholder="PinCode"
              required
              id="pincodeSelect"
              onChange={(e) => setPincode(e.target.value)}
            />
          </FormGroup>
          {state && state !== '' && <FormGroup>
            <Label for="stateSelect">State</Label>
            <Input
              type="text"
              id="stateSelect"
              disabled
              value={state}
            />
          </FormGroup>}
          {city && city !== '' && <FormGroup>
            <Label for="citySelect">City</Label>
            <Input
              type="text"
              id="citySelect"
              disabled
              value={city}
            />
          </FormGroup>}
          {
            postOffice.length !== 0 &&
            <FormGroup>
            <Label for="blockSelect">Select block</Label>
            <Input type="select" name="select" id="blockSelect" required onChange={(e) => setBlock(e.target.value)}>
            <option value="">----Select-----</option>
            {
              postOffice.map((item) =>
              <option value={item.Name + ' ' + item.Block}>{item.Name + ' ' + item.Block}</option>
              )
            }
            </Input>
            </FormGroup>
          }
          { donateType && donateType === "oxygen" &&
          <FormGroup>
            <Label for="oxygenAvailable">Number of cylinders available</Label>
            <Input
              type="number"
              placeholder="Number of cylinders available"
              id="oxygenAvailable"
              onChange={(e) => setNoOfCylinder(e.target.value)}
            />
          </FormGroup>
          }
          { donateType && donateType === "plasma" &&
          <FormGroup>
            <Label for="bloogGroupSelect">Select blood group</Label>
            <Input type="select" name="select" id="bloogGroupSelect" required onChange={(e) => setBloogGroup(e.target.value)}>
              <option value="">----Select-----</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </Input>
          </FormGroup>
          }
          { donateType && donateType === "medicine" &&
          <FormGroup>
            <Label for="medicineName">Name of medicine</Label>
            <Input
              type="text"
              placeholder="Name of medicine"
              id="medicineName"
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </FormGroup>
          }
          { donateType && donateType === "bed" &&
          <FormGroup>
            <Label for="bedAvailable">Number of beds available</Label>
            <Input
              type="number"
              placeholder="Number of beds available"
              id="bedAvailable"
              onChange={(e) => setNoOfbed(e.target.value)}
            />
          </FormGroup>
          }
          <Button color="primary" type="submit" size="lg" block>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Donate;
