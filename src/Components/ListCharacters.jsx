import { React, useEffect, useState } from "react";
import Character from "./Character";
import Buttons from "./Buttons";
import { Row, Col } from "reactstrap";

function ListCharacters() {
  const [character, setCharater] = useState([]);
  const [page, setPage] = useState(1);

  const btnAdelante = () => {
    setPage(page + 1);
  };

  const btnAtras = (e) => {
    if (page <= 1) {
      e.preventDefault();
    } else {
      setPage(page - 1);
    }
  };

  const eventPages = () => {
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
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharater(data.results);
    };
    fetchData();
  }, [page]);

  return (
    <div>
      {eventPages()}
      <Row xs="4">
        {character.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </Row>
      {eventPages()}
    </div>
  );
}

export default ListCharacters;
