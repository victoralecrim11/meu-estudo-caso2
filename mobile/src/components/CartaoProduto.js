import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Title, Paragraph, Button, Chip } from 'react-native-paper'

export default function CartaoProduto({ produto, onVerDetalhes }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.titulo}>{produto.nome}</Title>
        
        <Paragraph style={styles.codigo}>
          Código: {produto.id}
        </Paragraph>
        
        <Paragraph numberOfLines={2} style={styles.descricao}>
          {produto.descricao}
        </Paragraph>
        
        <View style={styles.infoContainer}>
          <Title style={styles.preco}>
            R$ {produto.preco ? produto.preco.toFixed(2) : '0.00'}
          </Title>
          
          <Chip 
            mode="outlined" 
            style={styles.chip}
            textStyle={styles.chipText}
          >
            Estoque: {produto.quantidade || 0}
          </Chip>
        </View>
      </Card.Content>
      
      <Card.Actions>
        <Button 
          mode="contained" 
          onPress={() => onVerDetalhes && onVerDetalhes(produto.id)}
          style={styles.botao}
        >
          Ver Detalhes
        </Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 4,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 5,
  },
  codigo: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00c853',
  },
  chip: {
    backgroundColor: '#f5f5f5',
  },
  chipText: {
    fontSize: 12,
  },
  botao: {
    marginRight: 8,
    flex: 1,
  },
})
