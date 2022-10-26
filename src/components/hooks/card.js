import { Button, Card, Col } from 'react-bootstrap';

const card = ({ nama }) => {
  return (
    <>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Card className="mt-3">
          <Card.Img variant="top" src={nama.urlToImage} />
          <Card.Body>
            <Card.Title>{nama.title} </Card.Title>
            <Card.Text>{nama.description}</Card.Text>
            <Button variant="danger">redmore ...</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default card;
