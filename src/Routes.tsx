import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Header from  './components/Header';
import home from './pages/Home'
import  DenunciaDetalhes from "./pages/DenunciaDetalhes"

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator screenOptions={{headerShown:false}}>
          <Screen 
            name='home' component={home}  options={{
            headerShown:true, 
            header:()=><Header titulo='Denucias'/>}}
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