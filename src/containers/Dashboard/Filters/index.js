import React from "react";
import { useFilters } from "./hooks";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Filters = ({ handleResetFilter }) => {
  const {
    donateType,
    state,
    city,
    setCity,
    setState,
    setDonateType,
    handleApplyFilters,
  } = useFilters();
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">Donation Type</Label>
        <Input
          type="select"
          name="select"
          required
          onChange={(e) => setDonateType(e.target.value)}
        >
          <option value="">----Select-----</option>
          <option value="oxygen">oxygen</option>
          <option value="plasma">plasma</option>
          <option value="medicine">medicine</option>
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
        <Input type="select" required onChange={(e) => setCity(e.target.value)}>
          <option value="" selected>
            City
          </option>
          <option value="pune">Pune</option>
          <option value="kanpur">Kanpur</option>
          <option value="delhi">Delhi</option>
        </Input>
      </FormGroup>
      <Button
        // disabled={!donateType && !state && !city}
        variant="success"
        onClick={handleApplyFilters}
      >
        Filter
      </Button>
      <Button
        // disabled={!donateType && !state && !city}
        variant="primary"
        onClick={handleResetFilter}
      >
        Reset
      </Button>
    </Form>
  );
};

export default Filters;
