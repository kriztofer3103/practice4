import React from "react";
import { InputGroup, Input, Button } from "reactstrap";

function FormBusqueda({ changeBusqueda, vacio, limpiarCampo }) {
  return (
    <>
      <InputGroup>
        <Input
          type="tex"
          placeholder="Busqueda por nombre"
          onChange={changeBusqueda}
        />
        <Button disabled={vacio ? true : false}>
          <box-icon
            name={vacio ? "search" : "left-arrow-alt"}
            animation="tada"
            color="#fff"
            onClick={limpiarCampo}
          ></box-icon>
        </Button>
      </InputGroup>

      <br />
    </>
  );
}

export default FormBusqueda;
