import { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Card, Title, Paragraph, Button, Chip, Divider, List } from 'react-native-paper'
import { buscarProdutoPorId } from '../services/api'
import Carregando from '../components/Carregando'
import MensagemErro from '../components/MensagemErro'

export default function TelaDetalhes({ route }) {
  const { produtoId } = route.params
  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  const carregarProduto = async () => {
    try {
      setCarregando(true)
      setErro(null)
      const dados = await buscarProdutoPorId(produtoId)
      setProduto(dados)
    } catch (error) {
      setErro(error.message)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregarProduto()
  }, [produtoId])

  if (carregando) {
    return <Carregando mensagem="Carregando detalhes do produto..." />
  }

  if (erro) {
    return (
      <MensagemErro
        mensagem={erro}
        onTentarNovamente={carregarProduto}
      />
    )
  }

  if (!produto) {
    return (
      <View style={styles.containerVazio}>
        <Paragraph>Produto não encontrado.</Paragraph>
      </View>
    )
  }

  const emEstoque = produto.quantidade > 0

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.titulo}>{produto.nome}</Title>

          <View style={styles.chipsContainer}>
            <Chip
              mode="outlined"
              style={styles.chip}
              textStyle={styles.chipText}
            >
              ID: {produto.id}
            </Chip>
            <Chip
              mode="outlined"
              style={[
                styles.chip,
                emEstoque ? styles.chipEstoqueOk : styles.chipEstoqueZero
              ]}
              textStyle={styles.chipText}
            >
              {emEstoque ? 'Em Estoque' : 'Sem Estoque'}
            </Chip>
          </View>

          <Title style={styles.preco}>
            R$ {produto.preco ? produto.preco.toFixed(2) : '0.00'}
          </Title>

          <Card style={styles.descricaoCard}>
            <Card.Content>
              <Title style={styles.descricaoTitulo}>Descrição</Title>
              <Paragraph style={styles.descricao}>
                {produto.descricao || 'Sem descrição disponível.'}
              </Paragraph>
            </Card.Content>
          </Card>

          <Divider style={styles.divider} />

          <List.Section>
            <List.Item
              title="Quantidade em Estoque"
              description={`${produto.quantidade || 0} unidades`}
              left={props => <List.Icon {...props} icon="package-variant" />}
            />
            <List.Item
              title="Preço Unitário"
              description={`R$ ${produto.preco ? produto.preco.toFixed(2) : '0.00'}`}
              left={props => <List.Icon {...props} icon="currency-brl" />}
            />
            <List.Item
              title="Código do Produto"
              description={produto.id}
              left={props => <List.Icon {...props} icon="barcode" />}
            />
          </List.Section>

          <Button
            mode="contained"
            style={[
              styles.botao,
              !emEstoque && styles.botaoDesabilitado
            ]}
            disabled={!emEstoque}
          >
            {emEstoque ? 'Adicionar ao Carrinho' : 'Produto Indisponível'}
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 12,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    fontSize: 12,
  },
  chipEstoqueOk: {
    backgroundColor: '#e8f5e9',
    borderColor: '#4caf50',
  },
  chipEstoqueZero: {
    backgroundColor: '#ffebee',
    borderColor: '#f44336',
  },
  preco: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00c853',
    marginBottom: 16,
  },
  descricaoCard: {
    backgroundColor: '#f5f5f5',
    marginBottom: 16,
  },
  descricaoTitulo: {
    fontSize: 18,
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  divider: {
    marginVertical: 16,
  },
  botao: {
    marginTop: 16,
    paddingVertical: 8,
  },
  botaoDesabilitado: {
    backgroundColor: '#ccc',
  },
  containerVazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})