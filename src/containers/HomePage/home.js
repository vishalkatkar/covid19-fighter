import React from "react";
import { useHome } from "./hooks";
import Header from "../Header";
import Dashboard from "../Dashboard";
import { Container, Button, Card, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const Home = () => {
  const { handleClick } = useHome();
  return (
    <div>
      <Header />
      <Container>
        <section className="center-block m-5">
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">Doner</CardTitle>
              <CardText style={{height: 100}}>Help the needy to survive in this pendamic situation of COVID-19.</CardText>
              <Button color="info" onClick={handleClick}>Donate</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">Get Help</CardTitle>
              <CardText style={{height: 100}}>We will try to help you out in the best way we can.</CardText>
              <Button color="info">Get Help</Button>
            </Card>
          </Col>
        </Row>
        </section>
        <section>
          <Dashboard />
        </section>
      </Container>
    </div>
  );
};

export default Home;
