import React from "react";
import { Col, Card, CardTitle } from "reactstrap";

function Character({ character }) {
  return (
    <div>
      <Col>
        <Card>
          <CardTitle tag="h3" className="App-link">
            {character.name}
          </CardTitle>
          <img src={character.image} alt="Card image cap" width="100%" />
        </Card>
      </Col>
      <br />
    </div>
  );
}

export default Character;
