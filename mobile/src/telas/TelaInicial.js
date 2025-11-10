import { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { buscarTodosProdutos } from '../services/api'
import CartaoProduto from '../components/CartaoProduto'
import Carregando from '../components/Carregando'
import MensagemErro from '../components/MensagemErro'

export default function TelaInicial({ navigation }) {
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

  const navegarParaDetalhes = (id) => {
    navigation.navigate('TelaDetalhes', { produtoId: id })
  }

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

  if (produtos.length === 0) {
    return (
      <View style={styles.containerVazio}>
        <Text style={styles.textoVazio}>Nenhum produto encontrado.</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartaoProduto 
            produto={item} 
            onVerDetalhes={navegarParaDetalhes}
          />
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  lista: {
    padding: 8,
  },
  containerVazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textoVazio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
})