import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardProduto({ produto }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-primary">
          {produto.nome}
        </Card.Title>
        
        <Card.Text className="text-muted mb-2">
          <small>Código: {produto.id}</small>
        </Card.Text>
        
        <Card.Text className="flex-grow-1">
          {produto.descricao}
        </Card.Text>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-success fw-bold fs-5">
              R$ {produto.preco ? produto.preco.toFixed(2) : '0.00'}
            </span>
            <span className="badge bg-secondary">
              Estoque: {produto.quantidade || 0}
            </span>
          </div>
          
          <Button 
            as={Link} 
            to={`/produto/${produto.id}`}
            variant="primary" 
            className="w-100"
          >
            Ver Detalhes
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardProduto