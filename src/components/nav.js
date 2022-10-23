import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
export default class nav extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="success" variant="dark">
          <Container>
            <Navbar.Brand href="#home">gumelar react news api</Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}
