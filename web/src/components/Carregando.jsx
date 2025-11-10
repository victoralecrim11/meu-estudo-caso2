import { Spinner, Container } from "react-bootstrap";

function Carregando({ mensagem = "Carregando..." }) {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "400px" }}
    >
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
      <p className="mt-3 text-muted">{mensagem}</p>
    </Container>
  );
}

export default Carregando;
