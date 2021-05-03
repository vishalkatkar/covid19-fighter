import React from "react";
import { useHome } from "./hooks";
import Header from "../Header";
import { Container, Button, Card, Row, Col, CardImg, CardBody, CardTitle, List, CardText } from "reactstrap";

const Home = () => {
  const { handleClick } = useHome();
  return (
    <div style={{
      backgroundImage: `url(https://picsum.photos/200/300/?blur)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: window.innerHeight + 'px'
    }}>
      <Header />
      <Container>
        <section className="m-5">
          <Row className="mb-5">
            <Col sm="6" style={{ margin: '0 auto' }}>
              <Card body>
                <CardTitle tag="h5" className="text-center">Are you looking for?</CardTitle>
                <CardText style={{ height: 100 }}>
                  <List type="unstyled">
                    <ul>
                      <li>Oxygen cylinder</li>
                      <li>Plasma Doner</li>
                      <li>Medicines</li>
                      <li>COVID bed</li>
                    </ul>
                  </List>
                </CardText>
                <Button color="info" onClick={() => handleClick("dashboard")}>Find</Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5" className="text-center">Doner</CardTitle>
                <CardText style={{ height: 100 }}>Help the needy to survive in this pendamic situation of COVID-19.</CardText>
                <Button color="info" onClick={() => handleClick("donate")}>Donate</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5" className="text-center">Patient</CardTitle>
                <CardText style={{ height: 100 }}>We will try to help you out in the best way we can.</CardText>
                <Button color="info" onClick={() => handleClick("patient")}>Get Help</Button>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Home;
