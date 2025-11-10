import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proweb.leoproti.com.br/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor para tratamento de erros
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Erro na requisição:', error)
    return Promise.reject(error)
  }
)

// Funções para consumo da API
export const buscarTodosProdutos = async () => {
  try {
    const response = await api.get('/produtos')
    return response.data
  } catch (error) {
    throw new Error('Erro ao buscar produtos: ' + error.message)
  }
}

export const buscarProdutoPorId = async (id) => {
  try {
    const response = await api.get(`/produtos/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Erro ao buscar produto: ' + error.message)
  }
}

export default api