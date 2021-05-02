import React from "react";
import styles from "./home.css";
import { useHome } from "./hooks";
import Header from "../Header";
import { Container, Button } from 'reactstrap';

const Home = () => {
  const {
    handleClick
  } = useHome();
  return (
    <div className={styles.blockBack}>
      <Header />
      <Container>
        <section>
          <div className="mb-2">
            <Button variant="primary" size="lg" onClick={handleClick}>
              Donate
            </Button>{' '}
            <Button variant="secondary" size="lg">
              Get Help
            </Button>
          </div>
        </section>
      </Container>
    </div>
  )
};

export default Home;
