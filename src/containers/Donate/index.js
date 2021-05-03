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
} from "reactstrap";
import { COVID_HELP_MAIN_CATEGORY } from "../../constants";

const Donate = () => {
  const {
    handleSubmit,
    setDonateType,
    setState,
    setCity,
    setName,
    setMobileNumber,
    setNoOfCylinder,
  } = useDonate();
  return (
    <div>
      <Header />
      <Container>
        <Form className="center-block col-md-4">
          <FormGroup>
            <Label for="exampleSelect">What you want to donate?</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              required
              onChange={(e) => setDonateType(e.target.value)}
            >
              <option value="">----Select-----</option>
              {COVID_HELP_MAIN_CATEGORY.map((category) => (
                <option value={category.value}>{category.title}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">State</Label>
            <Input
              type="select"
              required
              onChange={(e) => setState(e.target.value)}
            >
              <option value="" selected>
                State
              </option>
              <option value="maharashtra">Maharashtra</option>
              <option value="utterpradesh">Utterpradesh</option>
              <option value="delhi">Delhi</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">City</Label>
            <Input
              type="select"
              required
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" selected>
                City
              </option>
              <option value="pune">Pune</option>
              <option value="kanpur">Kanpur</option>
              <option value="delhi">Delhi</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              placeholder="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              placeholder="mobile number"
              required
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              placeholder="No of cylinder want to donate"
              onChange={(e) => setNoOfCylinder(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input valid />
            <FormFeedback tooltip>
              Oh noes! that name is already taken
            </FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Donate;
