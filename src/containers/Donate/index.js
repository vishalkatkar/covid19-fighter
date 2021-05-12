import React from "react";
import Header from "../Header";
import { useDonate, usePinCode } from "./hooks";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Modal,
  ModalBody,
  FormFeedback
} from "reactstrap";
import { COVID_HELP_MAIN_CATEGORY, BLOOD_GROUP } from "../../constants";

const Donate = ({ type }) => {
  const {
    handleSubmit,
    setDonateType,
    donateType,
    setName,
    setMobileNumber,
    setAge,
    setNoOfCylinder,
    setBloogGroup,
    setNoOfUnits,
    setHospitalName,
    setMedicineName,
    setNoOfbed,
    pincodeErr,
    gotoHome,
    modal,
    donateTypeErr,
    donarNameErr,
    mobileNumberErr,
    noOfCylinderErr,
    bloodGroupErr
  } = useDonate(type);

  const {
    pinCode,
    state,
    city,
    block,
    postOffice,
    setPincode,
    setBlock,
  } = usePinCode();

  return (
    <div
      style={{
        backgroundImage: `url(https://picsum.photos/200/300/?blur)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: window.innerHeight + "px",
      }}
    >
      <Header />
      <Container className="p-4">
        <Form
          className="col-md-7 bg-light p-4 rounded-sm"
          style={{ margin: "0 auto" }}
        >
          <h3 className="text-center mb-4">
            {type == "donar" ? "Donor " : "Seeker "} Form
          </h3>
          <FormGroup tag="fieldset">
            <Label for="donationType">
              {type == "donar" ? "Donation Type" : "Need Type"}
            </Label>
            <FormGroup
              check
              className="col-sm-12"
              required
              onChange={(e) => setDonateType(e.target.value)}
            >
              {COVID_HELP_MAIN_CATEGORY.map((category) => (
                <Label check className="col-sm-3">
                  <Input type="radio" name="radio1" value={category.value} invalid={donateTypeErr} />
                  {category.title}
                  <FormFeedback>{donateTypeErr}</FormFeedback>
                </Label>
              ))}
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              placeholder="Name"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              invalid={donarNameErr}
            />
          <FormFeedback>{donarNameErr}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="mobile">Mobile Number</Label>
            <Input
              type="number"
              placeholder="Mobile number"
              required
              id="mobile"
              onChange={(e) => setMobileNumber(e.target.value)}
              invalid={mobileNumberErr}
            />
            <FormFeedback>{mobileNumberErr}</FormFeedback>
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
              invalid={pincodeErr}
            />
            <FormFeedback>{pincodeErr}</FormFeedback>
          </FormGroup>
          {state && state !== "" && (
            <FormGroup>
              <Label for="stateSelect">State</Label>
              <Input type="text" id="stateSelect" disabled value={state} />
            </FormGroup>
          )}
          {city && city !== "" && (
            <FormGroup>
              <Label for="citySelect">City</Label>
              <Input type="text" id="citySelect" disabled value={city} />
            </FormGroup>
          )}
          {postOffice && postOffice.length !== 0 && (
            <FormGroup>
              <Label for="blockSelect">Select block</Label>
              <Input
                type="select"
                name="select"
                id="blockSelect"
                required
                onChange={(e) => setBlock(e.target.value)}
              >
                <option value="">----Select-----</option>
                {postOffice.map((item) => (
                  <option value={item.Name + " " + item.Block}>
                    {item.Name + " " + item.Block}
                  </option>
                ))}
              </Input>
            </FormGroup>
          )}
          {donateType && donateType === "oxygen" && (
            <FormGroup>
              <Label for="oxygenAvailable">
                Number of cylinders {type == "donar" ? "available" : "needed"}
              </Label>
              <Input
                type="number"
                placeholder="Number of cylinders"
                id="oxygenAvailable"
                onChange={(e) => setNoOfCylinder(e.target.value)}
                invalid={noOfCylinderErr}
              />
              <FormFeedback>{noOfCylinderErr}</FormFeedback>
            </FormGroup>
          )}
          {donateType && donateType === "plasma" && (
            <FormGroup>
              <Label for="bloogGroupSelect">Select blood group</Label>
              <Input
                type="select"
                name="select"
                id="bloogGroupSelect"
                required
                onChange={(e) => setBloogGroup(e.target.value)}
                invalid={bloodGroupErr}
              >
                <option value="">----Select-----</option>
                {BLOOD_GROUP.map((category) => (
                  <option value={category.value}>{category.title}</option>
                ))}
              </Input>
              <FormFeedback>{bloodGroupErr}</FormFeedback>
            </FormGroup>
          )}
          {donateType && donateType === "plasma" && (
            <FormGroup>
              <Label for="noOfUnit">Number of Units</Label>
              <Input
                type="text"
                id="noOfUnit"
                placeholder="Number of units"
                onChange={(e) => setNoOfUnits(e.target.value)}
              />
            </FormGroup>
          )}
          {donateType && donateType === "plasma" && (
            <FormGroup>
              <Label for="hospitalName">Hospital/Lab Name</Label>
              <Input
                type="text"
                id="hospitalName"
                placeholder="Hospital/Lab Name"
                onChange={(e) => setHospitalName(e.target.value)}
              />
            </FormGroup>
          )}
          {donateType && donateType === "medicines" && (
            <FormGroup>
              <Label for="medicineName">Name of medicine</Label>
              <Input
                type="text"
                placeholder="Name of medicine"
                id="medicineName"
                onChange={(e) => setMedicineName(e.target.value)}
                invalid={noOfCylinderErr}
              />
              <FormFeedback>{noOfCylinderErr}</FormFeedback>
            </FormGroup>
          )}
          {donateType && donateType === "beds" && (
            <FormGroup>
              <Label for="bedAvailable">
                Number of beds {type == "donar" ? "available" : "needed"}
              </Label>
              <Input
                type="number"
                placeholder="Number of beds"
                id="bedAvailable"
                onChange={(e) => setNoOfbed(e.target.value)}
                invalid={noOfCylinderErr}
              />
              <FormFeedback>{noOfCylinderErr}</FormFeedback>
            </FormGroup>
          )}
          <Button
            onClick={() =>
              handleSubmit({
                pinCode,
                state,
                city,
                block,
              })
            }
            color="info"
            size="lg"
            block
          >
            Submit
          </Button>
        </Form>
        <Modal isOpen={modal} toggle={gotoHome} style={{ top: 200 }}>
          <ModalBody className="text-center">
            Thank you for sharing your information!
          </ModalBody>
          <Button
            color="info"
            onClick={gotoHome}
            className="mb-4 p-1 pl-3 pr-3"
            style={{ justifyContent: "center", alignSelf: "center" }}
          >
            Close
          </Button>
        </Modal>
      </Container>
    </div>
  );
};

export default Donate;
