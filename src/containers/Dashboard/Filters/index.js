import React from "react";
import { useFilters } from "./hooks";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { usePinCode } from "../../Donate/hooks";
import { COVID_HELP_MAIN_CATEGORY, BLOOD_GROUP } from "../../../constants";

const Filters = ({ handleResetFilter }) => {
  const { err, donateType, setDonateType, handleApplyFilters } = useFilters();

  const {
    pinCode,
    state,
    city,
    block,
    postOffice,
    isLocationError,
    setPincode,
    setBlock,
    setIsLocationError,
    locationErrMsg,
  } = usePinCode();
  console.log({ donateType: donateType });
  console.log({ pinCode: pinCode });
  return (
    <Form className="filter-form">
      <Row form>
        <Col md={2}>
          <FormGroup>
            <Label for="pincodeSelect">Type</Label>
            <Input
              type="select"
              required
              value={donateType}
              onChange={(e) => setDonateType(e.target.value)}
            >
              <option value="">----Select-----</option>
              {COVID_HELP_MAIN_CATEGORY.map((item) => (
                <option value={item.value}>{item.title}</option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="pincodeSelect">Pincode</Label>
            <Input
              type="number"
              placeholder="PinCode"
              required
              id="pincodeSelect"
              value={pinCode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          {postOffice && postOffice.length !== 0 && (
            <FormGroup>
              <Label for="blockSelect">Block</Label>
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
        </Col>
        <Col md={3}>
          {state && state !== "" && (
            <FormGroup>
              <Label for="stateSelect">State</Label>
              <Input type="text" id="stateSelect" disabled value={state} />
            </FormGroup>
          )}
        </Col>
        <Col md={2}>
          {city && city !== "" && (
            <FormGroup>
              <Label for="citySelect">City</Label>
              <Input type="text" id="citySelect" disabled value={city} />
            </FormGroup>
          )}
        </Col>
      </Row>
      <Row form>
        <Col md={3}></Col>
        <Col md={3} className="pb-3">
          <Button
            block
            // disabled={!donateType && !state && !city}
            color="info"
            onClick={() => handleApplyFilters({ state, city, block })}
          >
            Filter
          </Button>
        </Col>
        <Col md={3} className="pb-3">
          <Button
            block
            // disabled={!donateType && !state && !city}
            color="info"
            onClick={() => {
              handleResetFilter();
              setDonateType("");
              setPincode("");
              setBlock("");
            }}
          >
            Reset
          </Button>
        </Col>
        <Col md={3}></Col>
      </Row>
      {err && (
        <Row>
          <h6 className="err">{err}</h6>
        </Row>
      )}
    </Form>
  );
};

export default Filters;
