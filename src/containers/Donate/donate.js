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
  FormFeedback
} from "reactstrap";

const Donate = () => {
  const {
    handleSubmit,
    setDonateType,
    state,
    city,
    setPincode,
    setName,
    setMobileNumber,
    setNoOfCylinder,
  } = useDonate();
  console.log({ city: city }, { state: state })
  return (
    <div style={{
      backgroundImage: `url(https://picsum.photos/200/300/?blur)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: window.innerHeight + 'px'
    }}>
      <Header />
      <Container className="p-4">
        <Form className="col-md-7 bg-light p-4 rounded-sm" style={{ margin: '0 auto' }}>
          <FormGroup>
            <Label for="exampleSelect">What you want to donate?</Label>
            <Input type="select" name="select" id="exampleSelect" required onChange={(e) => setDonateType(e.target.value)}>
              <option value="">----Select-----</option>
              <option value="oxygen">oxygen</option>
              <option value="plasma">plasma</option>
              <option value="medicine">medicine</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Name</Label>
            <Input
              type="text"
              placeholder="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Mobile Number</Label>
            <Input
              type="number"
              placeholder="mobile number"
              required
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Pincode</Label>
            <Input
              type="number"
              placeholder="PinCode"
              required
              onChange={(e) => setPincode(e.target.value)}
            />
          </FormGroup>
          {state && state !== '' && <FormGroup>
            <Label for="exampleSelect">State</Label>
            <Input
              type="text"
              value={state}
            />
          </FormGroup>}
          {city && city !== '' && <FormGroup>
            <Label for="exampleSelect">City</Label>
            <Input
              type="text"
              value={city}
            />
          </FormGroup>}
          <FormGroup>
            <Label for="exampleSelect">Number of cylinder available</Label>
            <Input
              type="number"
              placeholder="No of cylinder want to donate"
              onChange={(e) => setNoOfCylinder(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input valid />
            <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <Button color="primary" onClick={handleSubmit} size="lg" block>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Donate;
