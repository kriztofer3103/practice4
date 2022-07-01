import React from "react";
import { Button } from "reactstrap";

function Buttons({ evento, valor, color }) {
  return (
    <Button onClick={evento} color={color}>
      {valor}
    </Button>
  );
}

export default Buttons;
