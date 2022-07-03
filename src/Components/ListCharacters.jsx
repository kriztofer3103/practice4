import { React, useEffect, useState } from "react";
import Character from "./Character";
import { Row } from "reactstrap";
import EventPages from "./EventPages";
import axios from "axios";
import FormBusqueda from "./FormBusqueda";

function ListCharacters() {
  const [character, setCharater] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [vacio, setVacio] = useState(true);

  // Obteniendo datos de la API

  const fetchData = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setCharater(response.data.results);
        setSearch(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

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

  //Alamacenando el valor del input (cambiando de estado)

  const changeBusqueda = (e) => {
    let input = e.target.value;
    validacion(input);
    filtrarBusqueda(input);
  };

  // Filtrando busqueda

  const filtrarBusqueda = (name) => {
    const busqueda = search.filter((character) => {
      if (
        character.name.toString().toLowerCase().includes(name.toLowerCase())
      ) {
        return character;
      }
    });
    setCharater(busqueda);
  };

  //Validando el input vacio

  const validacion = (input) => {
    const bolean = () => {
      if (input == "") {
        return true;
      } else {
        return false;
      }
    };
    setVacio(bolean);
  };

  return (
    <div>
      <FormBusqueda
        filtrarBusqueda={filtrarBusqueda}
        changeBusqueda={changeBusqueda}
        vacio={vacio}
      />
      <EventPages
        btnAtras={btnAtras}
        btnAdelante={btnAdelante}
        page={page}
      ></EventPages>
      <Row xs="4">
        {character.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </Row>
      <EventPages
        btnAtras={btnAtras}
        btnAdelante={btnAdelante}
        page={page}
      ></EventPages>
    </div>
  );
}

export default ListCharacters;
