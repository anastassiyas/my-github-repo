import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap'; 


function index() {
  return <div>
<Container>
<Row>
    
    <Col md="4"><CardImg
      alt="Card image cap"
      src="https://picsum.photos/256/186"
      top
      width="100%"
    />
    </Col>

    <Col md="4"> <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    </Col>

    <Col md="4"> <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Button
      </Button>
    </Col>

</Row>




</Container>

<CardImg
      alt="Card image cap"
      src="https://picsum.photos/256/186"
      top
      width="100%"
    />

  <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
    
  </div>;
}

export default index;
