import { store } from "@/src/store";
import { Stack } from "expo-router";
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (

    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'Login' }}/>
        <Stack.Screen name="produtos" options={{ headerTitle: 'Produtos' }}/>
        <Stack.Screen name="detalhes" options={{ headerTitle: 'Detalhes do produto' }}/>
      </Stack>
    </Provider>
    
  )
}
