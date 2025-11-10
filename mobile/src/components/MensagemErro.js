import { View, StyleSheet } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper'

export default function MensagemErro({ mensagem, onTentarNovamente }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.titulo}>Ops! Algo deu errado</Title>
          <Paragraph style={styles.mensagem}>{mensagem}</Paragraph>
        </Card.Content>
        {onTentarNovamente && (
          <Card.Actions>
            <Button
              mode="contained"
              onPress={onTentarNovamente}
              style={styles.botao}
            >
              Tentar Novamente
            </Button>
          </Card.Actions>
        )}
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffebee',
  },
  titulo: {
    color: '#c62828',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mensagem: {
    color: '#d32f2f',
    marginTop: 8,
  },
  botao: {
    backgroundColor: '#c62828',
  },
})