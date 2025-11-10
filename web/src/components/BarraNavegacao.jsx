import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BarraNavegacao() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-shop me-2"></i>
          Catálogo de Produtos
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacao