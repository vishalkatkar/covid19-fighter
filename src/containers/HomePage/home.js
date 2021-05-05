import React from "react";
import { useHome } from "./hooks";
import Header from "../Header";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  CardTitle,
  List,
  CardText,
} from "reactstrap";

const Home = () => {
  const { handleClick } = useHome();
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
      <Container>
        <section className="m-5">
          <Row className="mb-5">
            <Col sm="6" style={{ margin: "0 auto" }}>
              <Card body>
                <CardTitle tag="h4" className="text-center">
                  What are you looking for?
                </CardTitle>
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
                <Row>
                  <Col sm="6" className="mt-2">
                    <Button color="info" block onClick={() => handleClick("donar")}>
                      Registered Donor
                    </Button>
                  </Col>
                  <Col sm="6" className="mt-2">
                    <Button color="info" block onClick={() => handleClick("seeker")}>
                      Registered Seeker
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className="mt-4">
              <Card body>
                <CardTitle tag="h5" className="text-center">
                  Donor
                </CardTitle>
                <CardText style={{ height: 100 }}>
                  Help the needy to survive in this pendamic situation of
                  COVID-19.
                </CardText>
                <Button color="info" onClick={() => handleClick("donate")}>
                  Donate
                </Button>
              </Card>
            </Col>
            <Col sm="6" className="mt-4">
              <Card body>
                <CardTitle tag="h5" className="text-center">
                  Seeker
                </CardTitle>
                <CardText style={{ height: 100 }}>
                  We will try to help you out in the best way we can.
                </CardText>
                <Button color="info" onClick={() => handleClick("get-help")}>
                  Get Help
                </Button>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Home;
