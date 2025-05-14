import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

// Importação das telas
import TelaInicial1 from './src/screens/TelaInicial1';
import TelaInicial2 from './src/screens/TelaInicial2';
import TelaInicial3 from './src/screens/TelaInicial3';
import TelaInicial4 from './src/screens/TelaInicial4';
import TeladeCadastro1 from './src/screens/TeladeCadastro1';
import TeladeLogin from './src/screens/TeladeLogin';
import TeladeCadastro2 from './src/screens/TeladeCadastro2';
import TeladeConfirmacao from './src/screens/TeladeConfirmacao';
import EsqueciaSenha from './src/screens/EsqueciaSenha';
import EsqueciaSenha2 from './src/screens/EsqueciaSenha2';
import EsqueciaSenha3 from './src/screens/EsqueciaSenha3';
import FilterScreen from './src/screens/Filtros';
const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial1" component={TelaInicial1} />
        <Stack.Screen name="TelaInicial2" component={TelaInicial2} />
        <Stack.Screen name="TelaInicial3" component={TelaInicial3} />
        <Stack.Screen name="TelaInicial4" component={TelaInicial4} />
        <Stack.Screen name="TeladeCadastro1" component={TeladeCadastro1} />
        <Stack.Screen name="TeladeLogin" component={TeladeLogin} />
        <Stack.Screen name="TeladeCadastro2" component={TeladeCadastro2} />
        <Stack.Screen name="TeladeConfirmacao" component={TeladeConfirmacao} />
        <Stack.Screen name="EsqueciaSenha" component={EsqueciaSenha} />
        <Stack.Screen name="EsqueciaSenha2" component={EsqueciaSenha2} />
        <Stack.Screen name="EsqueciaSenha3" component={EsqueciaSenha3} />
          <Stack.Screen name="Filtros" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
