import React from "react";
import { Row, Col } from "reactstrap";
import Buttons from "./Buttons";

function EventPages({ btnAtras, page, btnAdelante }) {
  return (
    <Row xs="3">
      <Col>
        <Buttons evento={btnAtras} valor="Atras" color="danger"></Buttons>
      </Col>
      <Col>
        <div>Pagina actual: {page}</div>
      </Col>
      <Col>
        <Buttons
          evento={btnAdelante}
          valor="Siguiente"
          color="success"
        ></Buttons>
      </Col>
      <br />
      <br />
    </Row>
  );
}

export default EventPages;
