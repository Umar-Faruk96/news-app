import React from "react";
import "./App.css";
import TopNews from "./components/TopNews/TopNews";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="mb-3">
        <h1 className="fs-2 text-primary text-center mt-4">React Bootstrap</h1>
        <TopNews />
      </Container>
    </>
  );
}

export default App;
