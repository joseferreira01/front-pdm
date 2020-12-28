import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Header from  './components/Header';
import home from './pages/Home';
import selectPosition from './pages/CreateDenuncia/SelectMapPosition';
import denunciaData from './pages/CreateDenuncia/DenunciaData';
import  DenunciaDetalhes from "./pages/DenunciaDetalhes";

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator screenOptions={{headerShown:false}}>

        <Screen 
            name='selectPosition' component={selectPosition}  options={{
            headerShown:true, 
            header:()=><Header titulo='Marcar Denuncia'/> 
            }}
          />

        <Screen 
            name='denunciaData' component={denunciaData}  options={{
            headerShown:true,
            header:()=><Header titulo='Denunciar'/> 
            }}
          />
          
          <Screen 
            name='home' component={home}  options={{
            headerShown:true 
            }}
          />
          
           <Screen 
            name='DenunciaDetalhes' component={DenunciaDetalhes}  options={{
            headerShown:true, 
            header:()=><Header titulo='Detalhes denuncia'/>}}
          />

          
          
        </Navigator>
    </NavigationContainer>
  );
}

export default Routes;