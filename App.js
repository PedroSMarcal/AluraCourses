import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import mock from './src/mocks/cesta'
import AppLoading from 'expo-app-loading';

export default function App() {
  /**
   * Vai receber e tentar renderizar as fontes sendo elas montserrat, contudo, se falhar retorna uma view solo, para utilizar as fontes tivemos que exportar do google fonts
   */
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontCarregada){
    return <AppLoading /> // AppLoading informa um retorno
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

