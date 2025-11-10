import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaInicial from '../telas/TelaInicial'
import TelaDetalhes from '../telas/TelaDetalhes'

const Stack = createNativeStackNavigator()

export default function NavegadorPrincipal() {
  return (
    <Stack.Navigator
      initialRouteName="TelaInicial"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="TelaInicial" 
        component={TelaInicial}
        options={{ title: 'Catálogo de Produtos' }}
      />
      <Stack.Screen 
        name="TelaDetalhes" 
        component={TelaDetalhes}
        options={{ title: 'Detalhes do Produto' }}
      />
    </Stack.Navigator>
  )
}