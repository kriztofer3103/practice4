import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import ListCharacters from "./Components/ListCharacters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid="sm">
          <h1 className="title">
            Aquí empezaremos con la practica 4 de React en Vite
          </h1>
          <div className="api-rest">
            <h2 className="subtitle">
              Consumiendo una Api Rest (Rick and Morty)
            </h2>
            <br />
            <ListCharacters className="list-characters"></ListCharacters>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
