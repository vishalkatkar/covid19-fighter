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
        <section className="m-2 mt-4">
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
                      <li>Plasma donor</li>
                      <li>Medicines</li>
                      <li>COVID bed</li>
                    </ul>
                  </List>
                </CardText>
                <Row>
                  <Col xs="6" className="mt-2">
                    <Button
                      color="info"
                      block
                      onClick={() => handleClick("donar")}
                    >
                      List of Donor
                    </Button>
                  </Col>
                  <Col xs="6" className="mt-2">
                    <Button
                      color="info"
                      block
                      onClick={() => handleClick("seeker")}
                    >
                      List of Seeker
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className="pb-4">
              <Card body>
                <CardTitle tag="h5" className="text-center">
                  Contribute to break the COVID19 chain
                </CardTitle>
                <CardText>
                  Contribute valuable following medical resources or inforamtion
                  related to COVID19
                  <List type="unstyled">
                    <ul>
                      <li>Oxygen cylinder</li>
                      <li>Plasma donor</li>
                      <li>Medicines</li>
                      <li>COVID bed</li>
                    </ul>
                  </List>
                </CardText>
                <Button
                  color="info"
                  size="lg"
                  onClick={() => handleClick("donate")}
                >
                  Register Here
                </Button>
              </Card>
            </Col>
            <Col sm="6" className="pb-4">
              <Card body>
                <CardTitle tag="h5" className="text-center">
                  Register here to get help
                </CardTitle>
                <CardText>
                  If you looking for help with following medical resources,
                  kindly register here.
                  <List type="unstyled">
                    <ul>
                      <li>Oxygen cylinder</li>
                      <li>Plasma donor</li>
                      <li>Medicines</li>
                      <li>COVID bed</li>
                    </ul>
                  </List>
                </CardText>
                <Button
                  color="info"
                  size="lg"
                  onClick={() => handleClick("get-help")}
                >
                  Register Here
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
