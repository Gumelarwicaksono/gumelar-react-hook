import React, { Component } from 'react';
import Navbar from './nav';
import Life from './lifesycle/index';
import { Container } from 'react-bootstrap';

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="mt-3">
          <Life />
        </Container>
      </div>
    );
  }
}
