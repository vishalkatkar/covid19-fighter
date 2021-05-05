import React from "react";
import { useFilters } from "./hooks";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

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
      <Row form>
        <Col md={1}>
          <h4>Filters: </h4>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input
              type="select"
              name="select"
              required
              onChange={(e) => setDonateType(e.target.value)}
            >
              <option value="">Type</option>
              <option value="oxygen">oxygen</option>
              <option value="plasma">plasma</option>
              <option value="medicine">medicine</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input
              type="select"
              required
              onChange={(e) => setState(e.target.value)}
            >
              <option value="" selected>
                State
              </option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Uttarpradesh">Utterpradesh</option>
              <option value="Delhi">Delhi</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input
              type="select"
              required
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" selected>
                City
              </option>
              <option value="Pune">Pune</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Delhi">Delhi</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={2}>
          <div>
            <Button
              // disabled={!donateType && !state && !city}
              color="info"
              onClick={handleApplyFilters}
            >
              Filter
            </Button>{" "}
            <Button
              // disabled={!donateType && !state && !city}
              color="info"
              onClick={handleResetFilter}
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
