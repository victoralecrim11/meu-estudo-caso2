import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { buscarTodosProdutos } from '../services/api'
import CardProduto from '../components/CardProduto'
import Carregando from '../components/Carregando'
import MensagemErro from '../components/MensagemErro'

function PaginaInicial() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  const carregarProdutos = async () => {
    try {
      setCarregando(true)
      setErro(null)
      const dados = await buscarTodosProdutos()
      setProdutos(dados)
    } catch (error) {
      setErro(error.message)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregarProdutos()
  }, [])

  if (carregando) {
    return <Carregando mensagem="Carregando produtos..." />
  }

  if (erro) {
    return (
      <MensagemErro 
        mensagem={erro} 
        onTentarNovamente={carregarProdutos}
      />
    )
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Nossos Produtos</h1>
      
      {produtos.length === 0 ? (
        <div className="text-center text-muted py-5">
          <p>Nenhum produto encontrado.</p>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {produtos.map(produto => (
            <Col key={produto.id}>
              <CardProduto produto={produto} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default PaginaInicial