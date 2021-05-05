import React from "react";
import { useFilters } from "./hooks";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { usePinCode } from "../../Donate/hooks";
import { COVID_HELP_MAIN_CATEGORY, BLOOD_GROUP } from "../../../constants";

const Filters = ({ handleResetFilter }) => {
  const { donateType, setDonateType, handleApplyFilters } = useFilters();

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
    <Form>
      <Row form>
        <Col md={1}>
          <h4>Filters: </h4>
        </Col>
        <FormGroup tag="fieldset">
          <Input
            type="select"
            className="col-12"
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
        <Col md={2}>
          <div>
            <Button
              // disabled={!donateType && !state && !city}
              color="info"
              onClick={() => handleApplyFilters({ state, city, block })}
            >
              Filter
            </Button>{" "}
            <Button
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
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default Filters;
