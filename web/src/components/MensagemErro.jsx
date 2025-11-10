import { Alert, Container, Button } from "react-bootstrap";

function MensagemErro({ mensagem, onTentarNovamente }) {
  return (
    <Container className="mt-4">
      <Alert variant="danger">
        <Alert.Heading>Ops! Algo deu errado</Alert.Heading>
        <p>{mensagem}</p>
        {onTentarNovamente && (
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-danger"
              size="sm"
              onClick={onTentarNovamente}
            >
              Tentar Novamente
            </Button>
          </div>
        )}
      </Alert>
    </Container>
  );
}

export default MensagemErro;
