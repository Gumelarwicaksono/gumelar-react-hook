import React, { Component } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

export default class card extends Component {
  render() {
    const article = this.props.nama;

    return (
      <>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card className="mt-3">
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title} </Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <Button variant="danger">redmore ...</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
