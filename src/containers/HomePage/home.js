import React from "react";
import styles from "./home.css";
import { useHome } from "./hooks";
import Header from "../Header";
import { Container, Button } from 'react-bootstrap';

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
              Get Help
            </Button>{' '}
            <Button variant="secondary" size="lg">
              Help Others
            </Button>
          </div>
        </section>
      </Container>
    </div>
  )
};

export default Home;
