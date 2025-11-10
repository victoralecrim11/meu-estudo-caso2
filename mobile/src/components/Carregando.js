import { View, StyleSheet } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

export default function Carregando({ mensagem = 'Carregando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" color="#6200ee" />
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
})