import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Badge,
  ListGroup,
} from "react-bootstrap";
import { buscarProdutoPorId } from "../services/api";
import Carregando from "../components/Carregando";
import MensagemErro from "../components/MensagemErro";

function PaginaDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const carregarProduto = useCallback(async () => {
    try {
      setCarregando(true);
      setErro(null);
      const dados = await buscarProdutoPorId(id);
      setProduto(dados);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }, [id]);

  useEffect(() => {
    carregarProduto();
  }, [carregarProduto]);

  const voltarParaInicial = () => {
    navigate("/");
  };

  if (carregando) {
    return <Carregando mensagem="Carregando detalhes do produto..." />;
  }

  if (erro) {
    return <MensagemErro mensagem={erro} onTentarNovamente={carregarProduto} />;
  }

  if (!produto) {
    return (
      <Container className="mt-4">
        <p className="text-center text-muted">Produto não encontrado.</p>
        <div className="text-center">
          <Button variant="primary" onClick={voltarParaInicial}>
            Voltar para Início
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button
        variant="outline-primary"
        onClick={voltarParaInicial}
        className="mb-4"
      >
        ← Voltar
      </Button>

      <Card className="shadow">
        <Card.Body>
          <Row>
            <Col md={12}>
              <h2 className="text-primary mb-3">{produto.nome}</h2>

              <div className="mb-3">
                <Badge bg="secondary" className="me-2">
                  ID: {produto.id}
                </Badge>
                <Badge bg={produto.quantidade > 0 ? "success" : "danger"}>
                  {produto.quantidade > 0 ? "Em Estoque" : "Sem Estoque"}
                </Badge>
              </div>

              <div className="mb-4">
                <h3 className="text-success mb-3">
                  R$ {produto.preco ? produto.preco.toFixed(2) : "0.00"}
                </h3>
              </div>

              <Card className="mb-4 bg-light">
                <Card.Body>
                  <h5 className="mb-3">Descrição</h5>
                  <p className="text-muted">
                    {produto.descricao || "Sem descrição disponível."}
                  </p>
                </Card.Body>
              </Card>

              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <strong>Quantidade em Estoque:</strong>
                  <span>{produto.quantidade || 0} unidades</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <strong>Preço Unitário:</strong>
                  <span>
                    R$ {produto.preco ? produto.preco.toFixed(2) : "0.00"}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <strong>Código do Produto:</strong>
                  <span>{produto.id}</span>
                </ListGroup.Item>
              </ListGroup>

              <div className="mt-4 d-flex gap-2">
                <Button
                  variant="success"
                  size="lg"
                  className="flex-grow-1"
                  disabled={produto.quantidade <= 0}
                >
                  {produto.quantidade > 0
                    ? "Adicionar ao Carrinho"
                    : "Produto Indisponível"}
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PaginaDetalhes;
