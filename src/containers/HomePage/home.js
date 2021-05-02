import React from "react";
import styles from "./home.css";
import { useHome } from "./hooks";
import Header from "../Header";
import Dashboard from "../Dashboard";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  const { handleClick } = useHome();
  return (
    <div className={styles.blockBack}>
      <Header />
      <Container>
        <section>
          <div className="mb-2">
            <Button variant="primary" size="lg" onClick={handleClick}>
              Donate
            </Button>{" "}
            <Button variant="secondary" size="lg">
              Get Help
            </Button>
          </div>
        </section>
        <section>
          <Dashboard />
        </section>
      </Container>
    </div>
  );
};

export default Home;
